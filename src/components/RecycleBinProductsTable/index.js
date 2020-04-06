import React, { useState } from "react"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { Button, Modal, Table, Tooltip } from "antd"
import { deleteProductMutation } from "../Products/mutations"
import { productsByCategoryIdQuery } from "../Products/query"

const styleImagesInTable = { width: "50px", height: "100%", marginRight: "10px" }
const styleIconInTable = { width: "20px", height: "100%", marginRight: "10px" }

const RecycleBinProductsTable = ({ editProduct, setIsOpenEditProductModal }) => {
  const { loading: recycle_bin_prod_loading, recycle_bin_prod_error, data: recycle_bin_prod_data } = useQuery(productsByCategoryIdQuery, {
    variables: {
      categoryId: process.env.REACT_APP_RECYCLE_BIN_ID
    }
  })

  const [isVisualDeleteModal, setIsVisualDeleteModal] = useState(false)
  const [productDeleted, setProductDeleted] = useState({})
  const [deleteProduct, {}] = useMutation(deleteProductMutation,
    {
      update(cache, { data: { deleteProduct } }) {
        const { productsByCategoryId } = cache.readQuery({
          query: productsByCategoryIdQuery,
          variables: {
            categoryId: process.env.REACT_APP_RECYCLE_BIN_ID
          }
        })
        cache.writeQuery({
          query: productsByCategoryIdQuery,
          variables: { categoryId: process.env.REACT_APP_RECYCLE_BIN_ID },
          data: { productsByCategoryId: productsByCategoryId.filter(prod => prod.id !== deleteProduct.id) }
        })
      }
    }
  )
  console.log("productDeleted", productDeleted)

  if (recycle_bin_prod_loading) return <p>Loading ... </p>

  const { productsByCategoryId } = recycle_bin_prod_data

  console.log("productsByCategoryId", productsByCategoryId)

  const handleEdit = (id) => {

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
          <Button disabled onClick={() => handleEdit(id)} type="dashed">
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
    </>
  )
}

export default RecycleBinProductsTable