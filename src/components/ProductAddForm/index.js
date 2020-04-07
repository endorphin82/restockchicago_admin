import React, { useEffect, useRef, useState } from "react"
import { Button, Form, Input, Modal, Select } from "antd"
import { useMutation, useQuery } from "@apollo/react-hooks"
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined"
import MinusCircleOutlined from "@ant-design/icons/lib/icons/MinusCircleOutlined"
import { addProductMutation } from "../Products/mutations"
import { categoriesAllQuery } from "../Categories/query"
import { connect } from "react-redux"
import { setIsOpenAddProductModal } from "../../actions"
import ApolloCacheUpdater from "apollo-cache-updater"
import { productsAllQuery } from "../Products/query"

const ProductAddForm = ({ isOpenAddProductModal, setIsOpenAddProductModal }) => {
  const [addProduct, {}] = useMutation(addProductMutation,
    {
      update(cache, { data: { addProduct } }) {
        const { productsAll } = cache.readQuery({ query: productsAllQuery })
        cache.writeQuery({
          query: productsAllQuery,
          data: { productsAll: productsAll.concat([addProduct]) }
        })
      }
    }
  )
  const { loading, error, data: data_categories } = useQuery(categoriesAllQuery)
  const [values, setValues] = useState({})
  console.log("values+++", values)

  const onFinish = (valuefromformlist) => {
    console.log("Received values of form:", values)

    const { name, images, price, categoryId, icon } = values
    // const price = Number(values.price)
    console.log("onFinish")
    addProduct({
      variables: {
        name,
        price,
        categoryId,
        images: !valuefromformlist.images ? [process.env.REACT_APP_NO_IMAGE_AVAILABLE] : valuefromformlist.images,
        icon
      }
      // update: (proxy, { data: { addProduct = {} } }) => { // your mutation response
      //   const mutationResult = addProduct // mutation result to pass into the updater
      //   const updates = ApolloCacheUpdater({
      //     // proxy, // apollo proxy
      //     queriesToUpdate: [addProduct], // queries you want to automatically update
      //     searchVariables: {
      //       published: true // update queries in the cache that have these vars
      //     },
      //     mutationResult
      //   })
      //   if (updates) console.log(`Product added`) // if no errors
      // }

    }).then(m => console.log("addProduct:", m))
      .catch(e => console.log("addProductERROR:", e))

    setIsOpenAddProductModal(false)
  }

  const handleCancel = e => {
    e.preventDefault()
    console.log(e)
    setIsOpenAddProductModal(false)
  }

  const handleChange = e => {
    const { name, value } = e.target
    console.log("target", e.target)
    setValues({ ...values, [name]: value })
  }

  const handleChangeSelect = value => {
    setValues({ ...values, "categoryId": value })
  }
  const { categoriesAll = [] } = data_categories
  console.log("isOpenAddProductModal", isOpenAddProductModal)

  return (
    <Modal
      title="Product information"
      visible={isOpenAddProductModal}
      footer={false}
      // onOk={onFinish}
      onCancel={handleCancel}
      // forceRender={true}
      // destroyOnClose={true}
      // okButtonProps={{htmlType: "submit" }}
      // cancelButtonProps={{ htmlType: "submit" }}
    >
      <Form
        // onChange={handleChange}
        name="product" {...formItemLayoutWithOutLabel}
        onFinish={onFinish}>
        <Form.Item
          label="Name product"
          // name="name"
          // noStyle
          rules={[{ required: true, message: "Name product is required" }]}
        >
          <Input
            name="name"
            onChange={handleChange} placeholder="name product"
            style={{ width: "100%", marginRight: 8 }}/>
        </Form.Item>
        <Form.Item
          label="Price"
          // name="price"
          // noStyle
          rules={[{ required: true, message: "Price is required" }]}
        >
          <Input
            name="price"
            onChange={handleChange}
            // value={0}
            type="number" placeholder="Price $" style={{ width: "100%", marginRight: 8 }}/>
        </Form.Item>

        <Form.Item
          label="Category"
          name="categoryId"
          // noStyle
          // onChange={handleChange}
          rules={[{ required: true, message: "Category is required" }]}
        >
          <Select
            name="categoryId"
            // onChange={handleChange}
            onChange={handleChangeSelect}
            placeholder="Select category">
            {categoriesAll.map(category =>
              <Select.Option
                key={category.id}
                value={category.id}
                onChange={handleChange}
              >{category.name}</Select.Option>
            )
            }
          </Select>
        </Form.Item>

        <Form.List name="images">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map((field, index) => (
                  <Form.Item
                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    label={index === 0 ? "Images" : ""}
                    required={false}
                    key={field.key}
                  >
                    <Form.Item
                      {...field}
                      validateTrigger={["onChange", "onBlur"]}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: "Please input image url or delete this field."
                        }
                      ]}
                      noStyle
                    >
                      <Input
                        // value={values.images[index]}
                        style={{ width: "90%", marginRight: 8 }}/>
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => {
                          remove(field.name)
                        }}
                      />
                    ) : null}
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add()
                    }}
                    style={{ width: "80%" }}
                  >
                    <PlusOutlined/> Add image url
                  </Button>
                </Form.Item>
              </div>
            )
          }}
        </Form.List>
        <Form.Item
          label="Icon"
          name="icon"
          // noStyle
        >
          <Input onChange={handleChange} placeholder="icon url" style={{ width: "100%", marginRight: 8 }}/>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>

    </Modal>
  )
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 }
  }
}

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 }
  }
}

export default connect(state => ({
    isOpenAddProductModal: state.add_product_modal.isOpen
  }), { setIsOpenAddProductModal }
)(ProductAddForm)