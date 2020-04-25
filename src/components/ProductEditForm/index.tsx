import React, { useEffect, useState } from "react"
import { Button, Form, Input, Modal, Select } from "antd"
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined"
import MinusCircleOutlined from "@ant-design/icons/lib/icons/MinusCircleOutlined"
import { connect } from "react-redux"
import { clearEditProduct, setIsOpenEditProductModal } from "../../actions"
import { priceStringToIntCent } from "../../utils/utils"
import { RootState } from "../../reducer"
import { useUpdateProduct } from "../Products/mutations/__generated__/UpdateProduct"
import { useCategoriesAll } from "../Categories/queries/__generated__/CategoriesAll"
import { REACT_APP_RECYCLE_BIN_ID } from "../../actions/types"
import { Product } from "../../__generated__/types"

interface PropsProductEditForm {
  edited_product: Product
  clearEditProduct: () => void
  setIsOpenEditProductModal: (isOpen: Boolean) => void
  isOpenEditProductModal: Boolean
}

const ProductEditForm: React.FC<PropsProductEditForm> = (
  {
    clearEditProduct, edited_product,
    isOpenEditProductModal, setIsOpenEditProductModal
  }) => {
  const [formEditProduct] = Form.useForm()
  const [updateProduct] = useUpdateProduct()
  const { loading: cat_loading, error: cat_error, data: cat_data } = useCategoriesAll()
  const [values, setValues] = useState<Product | any>({})
  useEffect(() => {
    setValues(edited_product)
  }, [edited_product])
  useEffect(() => {
    formEditProduct.setFieldsValue({
      "name": edited_product.name,
      "price": edited_product.price,
      "images": edited_product.images,
      "icon": edited_product.icon,
      "categories": edited_product.categories
    })
    return () => {
      formEditProduct.resetFields()
    }
  }, [edited_product, formEditProduct])

  const onFinish = (valuefromformlist: Product) => {
    const { name, categories, images, icon } = valuefromformlist
    const id = String(values?.id)
    const price = priceStringToIntCent(String(valuefromformlist.price))

    updateProduct({
      variables: {
        id, name, price, categories, images, icon
      }
    }).then(m => console.log("updateProductMESSAGE:", m))
      .catch(e => console.log("updateProductERROR:", e))
    setIsOpenEditProductModal(false)
  }
  const handleCancel = () => {
    setIsOpenEditProductModal(false)
    clearEditProduct()
  }
  const handleChange = (e: { target: HTMLInputElement }) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }
  if (cat_loading) {
    return (<div>Loading...</div>)
  }
  if (cat_error || !cat_data) {
    return (<div>Error...</div>)
  }
  const { categoriesAll } = cat_data
  const categoriesAllWithoutRecycleBin = categoriesAll?.filter((category) => {
    return category?._id !== REACT_APP_RECYCLE_BIN_ID
  })

  return (
    <Modal
      title={`Product information id: ${values.id}`}
      visible={Boolean(isOpenEditProductModal)}
      footer={false}
      onCancel={handleCancel}
      // forceRender={true}
      // destroyOnClose={false}
    >

      <Form
        form={formEditProduct}
        name="product" {...formItemLayoutWithOutLabel}
        // TODO:
        // @ts-ignore
        onFinish={onFinish}>

        <Form.Item
          label="Name product"
          name="name"
          // TODO:
          // @ts-ignore
          value={String(values?.name)}
          rules={[{ required: true, message: "Name product is required" }]}
        >
          <Input

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
          label="Categories"
          name="categories"
          // TODO:
          // @ts-ignore
          onChange={handleChange}
          rules={[{ required: true, message: "Category is required" }]}
        >
          <Select
            mode="multiple"
            placeholder="Select category">
            {categoriesAllWithoutRecycleBin?.map((category) =>
              <Select.Option
                defaultValue={edited_product.categories}
                key={String(category?._id)}
                value={String(category?._id)}
              >{String(category?.name)}
              </Select.Option>
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
                    ) : <span/>}
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
  isOpenEditProductModal: Boolean
  edited_product?: Product | {}
}

const mapStateToProps = (state: RootState): StateProps => ({
  isOpenEditProductModal: state.edit_product_modal.isOpen,
  edited_product: state.edit_product.product
})

export default connect<typeof ProductEditForm>(
  // TODO:
// @ts-ignore
  mapStateToProps,
  { setIsOpenEditProductModal, clearEditProduct }
)(ProductEditForm)