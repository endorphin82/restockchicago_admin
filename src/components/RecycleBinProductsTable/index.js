import React, { useState } from "react"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { Button, Form, Modal, Select, Skeleton, Table, Tooltip } from "antd"
import { deleteProductMutation, updateProductMutation } from "../Products/mutations"
import { productsByCategoryIdQuery } from "../Products/query"
import { connect } from "react-redux"
import { editProduct } from "../../actions"
import { categoriesAllQuery } from "../Categories/query"
import { client } from "../../store/apollo-client"

const styleImagesInTable = { width: "50px", height: "100%", marginRight: "10px" }
const styleIconInTable = { width: "20px", height: "100%", marginRight: "10px" }

const RecycleBinProductsTable = ({
                                   editProduct,
                                   edited_product
                                 }) => {
  const { loading: recycle_bin_prod_loading, recycle_bin_prod_error, data: recycle_bin_prod_data } = useQuery(productsByCategoryIdQuery, {
    variables: {
      categoryId: process.env.REACT_APP_RECYCLE_BIN_ID
    }
  })
  const { loading, error, data } = useQuery(categoriesAllQuery)

  const [values, setValues] = useState({})
  const [isVisualDeleteModal, setIsVisualDeleteModal] = useState(false)
  const [isVisualRestoreModal, setIsVisualRestoreModal] = useState(false)
  const [productDeleted, setProductDeleted] = useState({})
  const [deleteProduct, {}] = useMutation(deleteProductMutation
    ,
    {
      refetchQueries: [{
        query: productsByCategoryIdQuery,
        variables: {
          categoryId: process.env.REACT_APP_RECYCLE_BIN_ID
        }
      }]
    }
  )
  const [updateProduct, {}] = useMutation(updateProductMutation,
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
  const onFinish = (valuefromformlist) => {
    console.log("Received values of form:", values)

    const { categoryId } = valuefromformlist
    const { name, images, price, icon } = edited_product
    const id = String(edited_product.id)

    console.log("onFinish", valuefromformlist)
    updateProduct({
      variables: {
        id, name, price, categoryId, images, icon
      }

    }).then(m => {
        console.log("updateProductMESSAGE:", m)
      }
    )
      .catch(e => console.log("updateProductERROR:", e))

    // form.resetFields()
    setIsVisualRestoreModal(false)
  }
  const handleEdit = (id) => {
    editProduct(productsByCategoryId.find(prod => prod.id === id))
    setIsVisualRestoreModal(true)
  }
  const handleCancelRestore = () => {
    editProduct({})
    setIsVisualRestoreModal(false)
  }

  const handleDelete = (id) => {
    setIsVisualDeleteModal(true)
    setProductDeleted(productsByCategoryId.find(prod => prod.id === id))
  }

  const handleOk = () => {
    console.log("productDeleted.id", productDeleted.id)
    deleteProduct({
      variables: {
        id: productDeleted.id
      }
    }).then(mess => console.log("deleteProduct response:", mess))
    setIsVisualDeleteModal(false)
  }

  const handleCancel = () => {
    setIsVisualDeleteModal(false)
  }

  const handleChange = e => {
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
      key: "price"
    },
    {
      title: "Images",
      dataIndex: "images",
      key: "images",
      render: images => {
        return (images)
          ? <div>
            {
              images
                .map(image => <img
                  key={image} alt="img"
                  src={image}
                  style={styleImagesInTable}/>
                )
            }
          </div>
          : <span>no icons</span>
      }
    },
    {
      title: "Actions",
      dataIndex: "id",
      key: "id",
      render: (id) => <>
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
          name="restore" onFinish={onFinish}>
          <Form.Item
            label="Category"
            name="categoryId"
            onChange={handleChange}
            rules={[{ required: true, message: "Category is required" }]}
          >
            <Select
              placeholder="Select category">
              {categoriesAll.map(category =>
                <Select.Option
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

export default connect(state => ({
  edited_product: state.edit_product.product
}), { editProduct })(RecycleBinProductsTable)
