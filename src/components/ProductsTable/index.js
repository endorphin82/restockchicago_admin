import React, { useState } from "react"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { Button, Modal, Table } from "antd"
import { productsAllQuery } from "../Products/query"
import { deleteProductMutation } from "../Products/mutations"
import { connect } from "react-redux"
import { editProduct, setIsOpenModal } from "../../actions"

const styleImagesInTable = { width: "50px", height: "100%", marginRight: "10px" }
const styleIconInTable = { width: "20px", height: "100%", marginRight: "10px" }

const ProductsTable = ({ editProduct, setIsOpenModal }) => {
  const { loading, error, data } = useQuery(productsAllQuery)
  const [isVisualDeleteModal, setIsVisualDeleteModal] = useState(false)
  const [prod, pSet] = useState({})
  const [deleteProduct, {}] = useMutation(deleteProductMutation)

  if (loading) return <p>Loading ... </p>
  const { productsAll } = data

  const handleEdit = (id) => {
    const product = productsAll.find(prod => prod.id === id)
    editProduct(product)
    console.log("editProduct(product)", product)

    setIsOpenModal(true)
    console.log("table", product)
  }

  const handleDelete = (id) => {
    setIsVisualDeleteModal(true)
    const prod = productsAll.find(prod => prod.id === id)
    pSet(prod)
    console.log("table", prod)
  }

  const handleOk = (id) => {
    deleteProduct({
      variables: {
        id
      }
    })
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
        <Button onClick={handleEdit.bind(null, id)} type="dashed">
          Edit
        </Button>
        <Button onClick={handleDelete.bind(null, id)} type="dashed" danger>
          Delete
        </Button>
      </>
    }
  ]
  return (
    <>
      <Table dataSource={productsAll} columns={columns} rowKey="id"/>
      <Modal
        title="Delete product?"
        visible={isVisualDeleteModal}
        onOk={handleOk.bind(null, prod.id)}
        onCancel={handleCancel}
      >
        <p>{prod.name}</p>
      </Modal>
    </>
  )
}

export default connect(null, { setIsOpenModal, editProduct }, null, { pure: false }
)(ProductsTable)