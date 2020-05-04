import React, { useState } from "react"
import { connect } from "react-redux"
import { Button, Form, Input, Modal, Select } from "antd"
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined"
import MinusCircleOutlined from "@ant-design/icons/lib/icons/MinusCircleOutlined"
import { setIsOpenAddProductModal } from "../../actions"
import { priceStringToIntCent } from "../../utils/utils"
import {
  REACT_APP_NO_IMAGE_AVAILABLE, REACT_APP_RECYCLE_BIN_ID
} from "../../actions/types"
import { RootState } from "../../reducer"
import { IProductsByNameAndCategoriesId } from "../Products/types"
import { useAddProduct } from "../Products/mutations/__generated__/AddProduct"
import { useCategoriesAll } from "../Categories/queries/__generated__/CategoriesAll"
import { Product } from "../../__generated__/types"
import { ProductsByNameAndCategoriesIdDocument } from "../Products/queries/__generated__/ProductsByNameAndCategoriesId"

type PropsProductAddForm = {
  setIsOpenAddProductModal: (isOpen: Boolean) => void
  isOpenAddProductModal: Boolean
  searchName: String | void | undefined
  searchCategories: String[] | [] | undefined
}

const ProductAddForm: React.FC<PropsProductAddForm> = ({ isOpenAddProductModal, setIsOpenAddProductModal, searchName, searchCategories }) => {
  const [addProduct] = useAddProduct(
    {
      // TODO:
      // @ts-ignore
      update(cache, { data: { addProduct } }) {
        const { productsByNameAndCategoriesId } = cache.readQuery<IProductsByNameAndCategoriesId>({
          query: ProductsByNameAndCategoriesIdDocument,
          variables: {
            name: searchName,
            categories: searchCategories
          }
          /*  // TODO: Optimistic UI ?
              // add reject case

                    ,
                    // @ts-ignore
                    optimisticResponse: {
                      __typename: "Mutation",
                      addProduct: {
                        __typename: "Product",// @ts-ignore
                        productsByNameAndCategoriesId: [...productsByNameAndCategoriesId, addProduct]
                      }
                    }

           */
        })!.productsByNameAndCategoriesId
        cache.writeQuery({
          query: ProductsByNameAndCategoriesIdDocument,
          data: {
            // if add product includes search categories, update cache query productsByNameAndCategoriesId
            // @ts-ignore
            productsByNameAndCategoriesId: addProduct.categories.every((cat: any) => searchCategories?.includes(cat)) ? productsByNameAndCategoriesId?.concat([addProduct]) : productsByNameAndCategoriesId
          }
        })
      }
      ,
      refetchQueries: [
        {
          query: ProductsByNameAndCategoriesIdDocument,
          variables: {
            name: searchName,
            categories: searchCategories
          }
        }
      ]

    }
  )
  const { loading: cat_loading, error: cat_error, data: cat_data } = useCategoriesAll()
  const [values, setValues] = useState<Product | any>({})
  console.log("values+++", values)

  const onFinish = (valuefromformlist: Product) => {
    console.log("Received values of form:", values)

    const { name, icon } = values
    const price = priceStringToIntCent(values.price)
    console.log("onFinish")
    addProduct({
      variables: {
        name,
        price,
        categories: valuefromformlist.categories,
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

  const handleChangeSelect = (value: string) => {
    setValues({ ...values, "categoryId": value })
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
  console.log("isOpenAddProductModal", isOpenAddProductModal)

  return (
    <Modal
      title="Product information"
      visible={Boolean(isOpenAddProductModal)}
      footer={false}
      onCancel={handleCancel}
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
            type="number" placeholder="Price $" style={{ width: "100%", marginRight: 8 }}/>
        </Form.Item>

        <Form.Item
          label="Category"
          name="categories"
          // noStyle
          rules={[{ required: true, message: "Category is required" }]}
        >
          <Select
            onChange={handleChangeSelect}
            mode="multiple"
            placeholder="Select category">
            {categoriesAllWithoutRecycleBin?.map((category) =>
              <Select.Option
                key={String(category?._id)}
                value={String(category?._id)}
                onChange={handleChange}
              >{String(category?._id)}
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
                      <Input
                        style={{ width: "90%", marginRight: 8 }}/>
                    </Form.Item>

                    {(fields.length >= 1) ? (
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
  isOpenAddProductModal: Boolean
  searchName: String
  searchCategories: String[]
}

const mapStateToProps = (state: RootState): StateProps => ({
  isOpenAddProductModal: state.add_product_modal.isOpen,
  searchName: state.search_name.searchName,
  searchCategories: state.search_categories_list.searchCategories
})

export default connect<typeof ProductAddForm>(
  // TODO:
// @ts-ignore
  mapStateToProps,
  { setIsOpenAddProductModal }
)(ProductAddForm)