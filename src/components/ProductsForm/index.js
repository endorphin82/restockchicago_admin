import React, { useEffect, useState } from "react"
import { Button, Form, Input, Modal, Select } from "antd"
import { useMutation, useQuery } from "@apollo/react-hooks"
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined"
import MinusCircleOutlined from "@ant-design/icons/lib/icons/MinusCircleOutlined"
import { addProductMutation, updateProductMutation } from "../Products/mutations"
import { categoriesAllQuery } from "../Categories/query"

const ProductsForm = ({ prod, visible, visibleSet }) => {
  const [addProduct, {}] = useMutation(addProductMutation)
  const [updateProduct, {}] = useMutation(updateProductMutation)
  const { loading, error, data } = useQuery(categoriesAllQuery)
  const [values, setValues] = useState({ name: "", price: 0, category: "" })
  useEffect(() => {
    setValues(prod)
  }, [prod])
  console.log("values", values)
  const onFinish = values => {
    console.log("Received values of form:", values)

    const { id, name, categoryId, images, icon } = values
    const price = Number(values.price)

    id ?
      updateProduct({
        variables: {
          id, name, price, categoryId, images, icon
        }
      })
      : addProduct({
        variables: {
          name, price, categoryId, images, icon
        }
      })
    visibleSet(false)
  }

  const handleCancel = e => {
    e.preventDefault()
    console.log(e)
    visibleSet(false)
  }
  const handleChange = e => {
    const { name, value } = e.target

    setValues({ ...values, [name]: value })
  }
  const { categoriesAll = [] } = data
  return (
    <Modal
      title="Product information"
      visible={visible}
      footer={false}
      // onOk={onFinish}
      onCancel={handleCancel}
      // okButtonProps={{htmlType: "submit" }}
      // cancelButtonProps={{ htmlType: "submit" }}
    >

      <Form
        initialValues={{
          ["price"]: values.price,
          ["name"]: values.name,
          ["images"]: values.images,
          ["icon"]: values.icon
          // ["categoryId"]: values.category.id

        }}
        name="product" {...formItemLayoutWithOutLabel} onFinish={onFinish}>
        <Form.Item
          label="Name product"
          name="name"
          // value={values.name}

          // noStyle
          rules={[{ required: true, message: "Name product is required" }]}
        >
          <Input onChange={handleChange} placeholder="name product"
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
          onChange={handleChange}
          rules={[{ required: true, message: "Category is required" }]}
        >
          <Select placeholder="Select category">
            {categoriesAll.map(category =>
              <Select.Option
                key={category.id}
                // value={category.id}
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
                      <Input value={values.images[index]} onChange={handleChange} placeholder="image url"
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

export default ProductsForm