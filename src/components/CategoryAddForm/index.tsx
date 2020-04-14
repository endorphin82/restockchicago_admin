import React, { useState } from "react"
import { connect } from "react-redux"
import { RootState } from "../../reducer"
import { setIsOpenAddCategoryModal } from "../../actions"
import { useAddCategory } from "../Categories/mutations/__generated__/AddCategory"
import { IProductsAll } from "../Products/types"
import { ProductsAllDocument } from "../Products/queries/__generated__/ProductsAll"
import { CategoriesAllDocument, useCategoriesAll } from "../Categories/queries/__generated__/CategoriesAll"
import { ICategoriesAll } from "../Categories/types"
import { ProductCatId } from "../../__generated__apollo__/types-query"
import { Category } from "../../__generated__/types"
import { Modal, Form, Input, Button } from "antd"
import MinusCircleOutlined from "@ant-design/icons/lib/icons/MinusCircleOutlined"
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined"

type PropsCategoryAddForm = {
  setIsOpenAddCategoryModal: (isOpen: Boolean) => void
  isOpenAddCategoryModal: Boolean
}
const CategoryAddForm: React.FC<PropsCategoryAddForm> = ({ setIsOpenAddCategoryModal, isOpenAddCategoryModal }) => {
  const [addCategory, { data: daa_cat_data }] = useAddCategory(
    {
      // TODO:
      // @ts-ignore
      update(cache, { data: { addCategory } }) {
        const { categoriesAll } = cache.readQuery<ICategoriesAll>({ query: ProductsAllDocument })!.categoriesAll
        cache.writeQuery({
          query: CategoriesAllDocument,
          data: { categoriesAll: categoriesAll?.concat([addCategory]) }
        })
      },
      refetchQueries: [{
        query: CategoriesAllDocument
      }]
    }
  )
  const { loading: cat_loading, error: cat_error, data: cat_data } = useCategoriesAll()
  const [values, setValues] = useState<Category | any>({})

  const onFinish = (valuefromformlist: Category) => {
    const { name } = values
    const { icons, images } = valuefromformlist

    addCategory({
      variables: {
        name,
        icons,
        images
      }
    }).then(m => console.log("addCategory:", m))
      .catch(e => console.log("addCategoryERROR:", e))

    setIsOpenAddCategoryModal(false)
  }
  const handleCancel = () => {
    setIsOpenAddCategoryModal(false)
  }

  const handleChange = (e: { target: HTMLInputElement }) => {
    const { name, value } = e.target
    console.log("target", e.target)
    setValues({ ...values, [name]: value })
  }


  return (
    <Modal
      title="Category information"
      visible={Boolean(isOpenAddCategoryModal)}
      footer={false}
      onCancel={handleCancel}
    >
      <Form
        name="category" {...formItemLayoutWithOutLabel}
        // @ts-ignore
        onFinish={onFinish}>
        <Form.Item
          label="Name category"
          rules={[{ required: true, message: "Name category is required" }]}
        >
          <Input
            name="name"
            onChange={handleChange} placeholder="name category"
            style={{ width: "100%", marginRight: 8 }}/>
        </Form.Item>

        <Form.List name="icons">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map((field, index) => (
                  <Form.Item
                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    label={index === 0 ? "icons" : ""}
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
                          message: "Please input icon url or delete this field."
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
                    <PlusOutlined/> Add icon url
                  </Button>
                </Form.Item>
              </div>
            )
          }}
        </Form.List>

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
  isOpenAddCategoryModal: Boolean
}

const mapStateToProps = (state: RootState): StateProps => ({
  isOpenAddCategoryModal: state.add_cat_modal.isOpen
})

export default connect<typeof CategoryAddForm>(
  // TODO:
// @ts-ignore
  mapStateToProps,
  { setIsOpenAddCategoryModal }
)(CategoryAddForm)