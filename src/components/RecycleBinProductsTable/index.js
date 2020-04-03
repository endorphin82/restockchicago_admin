import React, { useState } from "react"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { Button, Modal, Table } from "antd"
import { deleteProductMutation } from "../Products/mutations"
import { connect } from "react-redux"
import { editProduct, setIsOpenEditProductModal } from "../../actions"

const styleImagesInTable = { width: "50px", height: "100%", marginRight: "10px" }
const styleIconInTable = { width: "20px", height: "100%", marginRight: "10px" }

const RecycleBinProductsTable = ({productsByCategoryId, editProduct, setIsOpenEditProductModal }) => {
  const [isVisualDeleteModal, setIsVisualDeleteModal] = useState(false)
  const [productDeleted, setProductDeleted] = useState({})
  const [deleteProduct, {}] = useMutation(deleteProductMutation)
  console.log("productDeleted", productDeleted)

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
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: category => {
        const { name, icons, id } = category
        return <div><span>{name} </span>
          {(icons.length !== 0)
            ? <img
              key={icons[0]} alt="img"
              src={icons[0]}
              style={styleIconInTable}/> : ""}
          <span> {id}</span>
        </div>
      }
    },
    {
      title: "Images",
      dataIndex: "images",
      key: "images",
      render: images => {
        return (images.length !== 0)
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
        <Button onClick={() => handleEdit(id)} type="dashed">
          Edit
        </Button>
        <Button onClick={() => handleDelete(id)} type="dashed" danger>
          Delete
        </Button>
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