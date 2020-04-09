import React, { useState } from "react"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { Button, Form, Modal, Select, Skeleton, Table, Tooltip } from "antd"
import { deleteProductMutation, updateProductMutation } from "../Products/mutations"
import { productsByCategoryIdQuery } from "../Products/query"
import { connect } from "react-redux"
import { editProduct } from "../../actions"
import { categoriesAllQuery } from "../Categories/query"
import { client } from "../../store/apollo-client"
import { priceToDollars } from "../../utils"
import { PropsRecycleBinProductsTable, PropsUpdateProduct } from "../Products/types"
import {
  Product,
  ProductCatId,
  productsByCategoryIdVariables,
  IproductsAll,
  categoriesAll_categoriesAll, IcategoriesAll
} from "../../__generated__/types-query"
import { EditProductState, EditProductStateOrEmpty, REACT_APP_RECYCLE_BIN_ID } from "../../actions/types"
import { updateProduct_updateProduct, updateProductVariables } from "../../__generated__/types-mutation"
import { RootState } from "../../reducer"

const styleImagesInTable = { width: "50px", height: "100%", marginRight: "10px" }
const styleIconInTable = { width: "20px", height: "100%", marginRight: "10px" }

const RecycleBinProductsTable: React.FC<PropsRecycleBinProductsTable> = ({
                                                                           editProduct,
                                                                           edited_product
                                                                         }) => {
  const { loading: recycle_bin_prod_loading, error: recycle_bin_prod_error, data: recycle_bin_prod_data } = useQuery<any, productsByCategoryIdVariables>(productsByCategoryIdQuery, {
    variables: {
      // @ts-ignore
      categoryId: REACT_APP_RECYCLE_BIN_ID
    }
  })
  const { loading, error, data } = useQuery<IcategoriesAll>(categoriesAllQuery)
  const [values, setValues] = useState({})
  const [isVisualDeleteModal, setIsVisualDeleteModal] = useState(false)
  const [isVisualRestoreModal, setIsVisualRestoreModal] = useState(false)
  // @ts-ignore
  const [productDeleted, setProductDeleted] = useState<Product>({})
  const [deleteProduct, {}] = useMutation(deleteProductMutation,
    {
      refetchQueries: [{
        query: productsByCategoryIdQuery,
        variables: {
          categoryId: REACT_APP_RECYCLE_BIN_ID
        }
      }]
    }
  )
  const [updateProduct, {}] = useMutation<{ query: updateProduct_updateProduct }, { variables: updateProductVariables }>(updateProductMutation,
    {
      refetchQueries: [{
        query: productsByCategoryIdQuery,
        variables: {
          categoryId: process.env.REACT_APP_RECYCLE_BIN_ID
        }
      }]
    }
  )
  if (!data) return <p>Loading ... </p>
  const { categoriesAll } = data

  console.log("productDeleted", productDeleted)

  if (recycle_bin_prod_loading) return <p>Loading ... </p>

  const { productsByCategoryId } = recycle_bin_prod_data

  console.log("productsByCategoryId", productsByCategoryId)
  const onFinish = (valuefromformlist: ProductCatId) => {
    console.log("Received values of form:", values)

    const { categoryId } = valuefromformlist

    // @ts-ignore
    const { name, images, price, icon } = edited_product
    // @ts-ignore
    const id = String(edited_product.id)

    console.log("onFinish", valuefromformlist)
    // @ts-ignore
    updateProduct<PropsUpdateProduct>({
      variables: {
        id, name, price, categoryId, images, icon
      }
    }).then((m: String) => {
        console.log("updateProductMESSAGE:", m)
      }
    )
      .catch((e: Error) => console.log("updateProductERROR:", e))

    // form.resetFields()
    setIsVisualRestoreModal(false)
  }
  const handleEdit = (id: String) => {
    editProduct(productsByCategoryId.find((prod: Product) => prod.id === id))
    setIsVisualRestoreModal(true)
  }
  const handleCancelRestore = () => {
    // @ts-ignore
    editProduct({})
    setIsVisualRestoreModal(false)
  }

  const handleDelete = (id: String) => {
    setIsVisualDeleteModal(true)
    setProductDeleted(productsByCategoryId.find((prod: Product) => prod.id === id))
  }

  const handleOk = (id: String) => {
    console.log("productDeleted.id", productDeleted.id)
    deleteProduct({
      variables: {
        id
      }
    }).then(mess => console.log("deleteProduct response:", mess))
    setIsVisualDeleteModal(false)
  }

  const handleCancel = () => {
    setIsVisualDeleteModal(false)
  }

  const handleChange = (e: { target: HTMLInputElement; }) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: Number) => {
        return priceToDollars(price)
      }
    },
    {
      title: "Images",
      dataIndex: "images",
      key: "images",
      render: (images: String[]) => {
        return (images)
          ? <div>
            {
              images
                .map(image => <img
                  // @ts-ignore
                  key={image} alt="img"
                  // @ts-ignore
                  src={image}
                  style={styleImagesInTable}/>
                )
            }
          </div>
          : <span>no images</span>
      }
    },
    {
      title: "Actions",
      dataIndex: "id",
      key: "id",
      render: (id: String) => <>
        <Tooltip title="Recovery this product in any category">
          <Button onClick={() => handleEdit(id)} type="dashed">
            Recovery in category
          </Button>
        </Tooltip>
        <Tooltip title="Delete forever">
          <Button onClick={() => handleDelete(id)} type="dashed" danger>
            Delete
          </Button>
        </Tooltip>
      </>
    }
  ]

  // @ts-ignore
  return (
    <>
      <Table dataSource={productsByCategoryId} columns={columns} rowKey="id"/>
      <Modal
        title="Delete product?"
        visible={isVisualDeleteModal}
        onOk={() => handleOk(productDeleted.id)}
        onCancel={handleCancel}
      >
        <p>{productDeleted.name}</p>
      </Modal>

      <Modal
        footer={false}
        title="Restore in category?"
        visible={isVisualRestoreModal}
        onCancel={handleCancelRestore}
      >
        <Form
          // @ts-ignore
          name="restore" onFinish={onFinish}>
          <Form.Item
            label="Category"
            name="categoryId"
            // @ts-ignore
            onChange={handleChange}
            rules={[{ required: true, message: "Category is required" }]}
          >
            <Select
              placeholder="Select category">
              {categoriesAll.map((category) =>
                <Select.Option
                  // @ts-ignore
                  key={category.id}
                >{category.name}</Select.Option>
              )
              }
            </Select>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Restore
          </Button>
        </Form>
      </Modal>
    </>
  )
}


interface StateProps {
  edited_product: EditProductState
}

const mapStateToProps = (state: RootState): StateProps => ({
// @ts-ignore
  edited_product: state.edit_product.product
})

export default connect<StateProps, typeof RecycleBinProductsTable>(
// @ts-ignore
  mapStateToProps,
  { editProduct })(RecycleBinProductsTable)
