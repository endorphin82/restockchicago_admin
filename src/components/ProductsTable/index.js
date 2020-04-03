import React, { useState } from "react"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { Button, Modal, Table } from "antd"
import { productsAllQuery } from "../Products/query"
import { deleteProductMutation } from "../Products/mutations"
import { connect } from "react-redux"
import { editProduct, setIsOpenEditProductModal } from "../../actions"

const styleImagesInTable = { width: "50px", height: "100%", marginRight: "10px" }
const styleIconInTable = { width: "20px", height: "100%", marginRight: "10px" }

const ProductsTable = ({ editProduct, setIsOpenEditProductModal }) => {
  const { loading, error, data } = useQuery(productsAllQuery)
  const [isVisualDeleteModal, setIsVisualDeleteModal] = useState(false)
  const [productDeleted, setProductDeleted] = useState({})
  const [deleteProduct, {}] = useMutation(deleteProductMutation)
  console.log("productDeleted", productDeleted)
  if (loading) return <p>Loading ... </p>
  const { productsAll } = data
  const productsAllWithoutRecycleBin = productsAll.filter(prod => {
    const { category } = prod
    return category.id !== process.env.REACT_APP_RECYCLE_BIN_ID
  })

  console.log("productsAllWithoutRecycleBin", productsAllWithoutRecycleBin)
  const handleEdit = (id) => {
    editProduct(productsAllWithoutRecycleBin.find(prod => prod.id === id))
    setTimeout(
      () => setIsOpenEditProductModal(true)
      , 250)
  }

  const handleDelete = (id) => {
    setIsVisualDeleteModal(true)
    setProductDeleted(productsAllWithoutRecycleBin.find(prod => prod.id === id))
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
          : <span>no images</span>
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
      <Table dataSource={productsAllWithoutRecycleBin} columns={columns} rowKey="id"/>
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

export default connect(null, { setIsOpenEditProductModal, editProduct }, null, { pure: false }
)(ProductsTable)