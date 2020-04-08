import React, { useEffect, useState } from "react"
import { Button, Form, Input, Modal, Select, Skeleton } from "antd"
import { useMutation, useQuery } from "@apollo/react-hooks"
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined"
import MinusCircleOutlined from "@ant-design/icons/lib/icons/MinusCircleOutlined"
import { updateProductMutation } from "../Products/mutations"
import { categoriesAllQuery } from "../Categories/query"
import { connect } from "react-redux"
import { editProduct, setIsOpenEditProductModal } from "../../actions"
import { priceStringToIntCent } from "../../utils"

const ProductEditForm = ({ edited_product, editProduct, isOpenEditProductModal, setIsOpenEditProductModal }) => {
  const [formEditProduct] = Form.useForm()
  const [updateProduct, {}] = useMutation(updateProductMutation)
  const { loading, error, data } = useQuery(categoriesAllQuery)
  const [values, setValues] = useState({})
  useEffect(() => {
    setValues(edited_product)
    console.log("edited_product", edited_product)
  }, [edited_product])
  useEffect(() => {
    formEditProduct.setFieldsValue({
      "name": edited_product.name,
      "price": edited_product.price,
      "images": edited_product.images,
      "icon": edited_product.icon
    })
    return () => {
      formEditProduct.resetFields()
    }
  }, [edited_product])
  console.log("values+++", values)

  const onFinish = (valuefromformlist) => {
    console.log("Received values of form:", values)

    const { name, categoryId, images, icon } = valuefromformlist
    const id = String(values.id)
    const price = priceStringToIntCent(valuefromformlist.price)
    console.log("onFinish", valuefromformlist)
    updateProduct({
      variables: {
        id, name, price, categoryId, images, icon
      }
    }).then(m => console.log("updateProductMESSAGE:", m))
      .catch(e => console.log("updateProductERROR:", e))
    setIsOpenEditProductModal(false)
  }
  const handleCancel = e => {
    console.log(e)
    setIsOpenEditProductModal(false)
    editProduct({})
  }
  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }
  if (!data.categoriesAll) return <Skeleton/>
  const { categoriesAll } = data
  if (!edited_product) return <Skeleton/>
  const { category } = edited_product
  console.log("cat", category)
  console.log("OpenEditProductModal", isOpenEditProductModal)

  return (
    <Modal
      title={`Product information id: ${values.id}`}
      visible={isOpenEditProductModal}
      footer={false}
      onCancel={handleCancel}
      forceRender={true}
      destroyOnClose={false}

    >

      <Form
        form={formEditProduct}
        name="product" {...formItemLayoutWithOutLabel} onFinish={onFinish}>
        <Form.Item
          label="Name product"
          name="name"
          // noStyle
          value={values.name}
          rules={[{ required: true, message: "Name product is required" }]}
        >
          <Input
            // name="name"
            // value={values.name}
            onChange={handleChange} placeholder="name product"
            style={{ width: "100%", marginRight: 8 }}/>
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          // noStyle
          rules={[{ required: true, message: "Price is required" }]}
        >
          <Input type="number" placeholder="Price $" style={{ width: "100%", marginRight: 8 }}/>
        </Form.Item>

        <Form.Item
          label="Category"
          name="categoryId"
          // noStyle
          // defaultValue="5e820a91e3cd504a9fef2b0f"
          onChange={handleChange}
          rules={[{ required: true, message: "Category is required" }]}
        >
          <Select
            // defaultValue={category.name}
            placeholder="Select category">
            {categoriesAll.map(category =>
              <Select.Option
                key={category.id}
                firstActiveValue="nike"

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
                      <Input value={values.images[index]} placeholder="image url"
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
    isOpenEditProductModal: state.edit_product_modal.isOpen,
    edited_product: state.edit_product.product
  }), { setIsOpenEditProductModal, editProduct }
)(ProductEditForm)