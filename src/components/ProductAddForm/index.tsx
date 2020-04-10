import React, { useEffect, useRef, useState } from "react"
import { Button, Form, Input, Modal, Select } from "antd"
import { useMutation, useQuery } from "@apollo/react-hooks"
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined"
import MinusCircleOutlined from "@ant-design/icons/lib/icons/MinusCircleOutlined"
import { addProductMutation } from "../Products/mutations"
import { categoriesAllQuery } from "../Categories/query"
import { connect } from "react-redux"
import { setIsOpenAddProductModal } from "../../actions"
import { productsAllQuery } from "../Products/query"
import { priceStringToIntCent } from "../../utils/utils"
import {
  AddProductModalState, Category,
  EditProductState,
  mstpAddProductModalState,
  REACT_APP_NO_IMAGE_AVAILABLE
} from "../../actions/types"
import { RootState } from "../../reducer"
import { AllTasksResult, PropsProductAddForm } from "../Products/types"
import { useAddProduct } from "../Products/mutations/__generated__/AddProduct"
import { ProductsAllDocument } from "../Products/queries/__generated__/ProductsAll"
import { ProductCatId } from "../../__generated__apollo__/types-query"
import { Product } from "../../__generated__/types"

const ProductAddForm: React.FC<PropsProductAddForm> = ({ isOpenAddProductModal, setIsOpenAddProductModal }) => {
  const [addProduct, {}] = useAddProduct(
    {
      // @ts-ignore
      update(cache, { data: { addProduct } }) {
        const { productsAll } = cache.readQuery<AllTasksResult>({ query: ProductsAllDocument })!.allTasks
        cache.writeQuery({
          query: productsAllQuery,
          data: { productsAll: productsAll.concat([addProduct]) }
        })
      }
    }
  )
  const { loading, error, data: data_categories } = useQuery(categoriesAllQuery)
  // @ts-ignore
  const [values, setValues] = useState<Product>({})
  console.log("values+++", values)

  const onFinish = (valuefromformlist: ProductCatId) => {
    console.log("Received values of form:", values)

    const { name, categoryId, icon } = values
    const price = priceStringToIntCent(values.price)
    console.log("onFinish")
    addProduct({
      variables: {
        name,
        price,
        categoryId,
        images: !valuefromformlist.images ? [REACT_APP_NO_IMAGE_AVAILABLE] : valuefromformlist.images,
        icon
      }
    }).then(m => console.log("addProduct:", m))
      .catch(e => console.log("addProductERROR:", e))

    setIsOpenAddProductModal(false)
  }

  const handleCancel = () => {
    setIsOpenAddProductModal(false)
  }

  const handleChange = (e: { target: HTMLInputElement }) => {
    const { name, value } = e.target
    console.log("target", e.target)
    setValues({ ...values, [name]: value })
  }

  const handleChangeSelect = (value) => {
    setValues({ ...values, "categoryId": value })
  }
  const { categoriesAll = [] } = data_categories
  console.log("isOpenAddProductModal", isOpenAddProductModal)

  return (
    <Modal
      title="Product information"
      // @ts-ignore
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
        // @ts-ignore
        onFinish={onFinish}>
        <Form.Item
          label="Name product"
          rules={[{ required: true, message: "Name product is required" }]}
        >
          <Input
            name="name"
            onChange={handleChange} placeholder="name product"
            style={{ width: "100%", marginRight: 8 }}/>
        </Form.Item>
        <Form.Item
          label="Price"
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
            // @ts-ignore
            name="categoryId"
            // onChange={handleChange}
            onChange={handleChangeSelect}
            placeholder="Select category">
            {categoriesAll.map((category: Category) =>
              <Select.Option
                key={String(category.id)}
                value={String(category.id)}
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
                      // @ts-ignore
                          const {name} = field
                          remove(field?.name: any)
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

interface StateProps {
  isOpenAddProductModal: Boolean
}

const mapStateToProps = (state: RootState): StateProps => ({
  isOpenAddProductModal: state.add_product_modal.isOpen
})

export default connect<typeof ProductAddForm>(
// @ts-ignore
  mapStateToProps,
  { setIsOpenAddProductModal }
)(ProductAddForm)