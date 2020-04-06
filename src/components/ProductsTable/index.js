import React, { useState } from "react"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { Button, Modal, Table, Tooltip } from "antd"
import { productsAllQuery, productsByCategoryIdQuery } from "../Products/query"
import { deleteProductMutation, updateProductMutation } from "../Products/mutations"
import { connect } from "react-redux"
import { editProduct, setIsOpenEditProductModal } from "../../actions"
import { DeleteOutlined } from "@ant-design/icons"

const styleImagesInTable = { width: "50px", height: "100%", marginRight: "10px" }
const styleIconInTable = { width: "20px", height: "100%", marginRight: "10px" }

const ProductsTable = ({ editProduct, setIsOpenEditProductModal }) => {
  const { loading, error, data } = useQuery(productsAllQuery)
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
  const [isVisualDeleteModal, setIsVisualDeleteModal] = useState(false)
  const [productDeleted, setProductDeleted] = useState({})
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
    setIsOpenEditProductModal(true)
  }

  const handleDelete = (id) => {
    setIsVisualDeleteModal(true)
    setProductDeleted(productsAllWithoutRecycleBin.find(prod => prod.id === id))
  }

  const handleOk = () => {
    console.log("productDeleted.id", productDeleted.id)
    const { id, name, price, images, icon } = productDeleted
    updateProduct({
      variables: {
        id, name, price, categoryId: process.env.REACT_APP_RECYCLE_BIN_ID, images, icon
      }

    }).then(m => console.log("updateProductMESSAGE:", m))
      .catch(e => console.log("updateProductERROR:", e))

    // deleteProduct({
    //   variables: {
    //     id: productDeleted.id
    //   }
    // }).then(mess => console.log("deleteProduct response:", mess))
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
          : <span>no images</span>
      }
    },
    {
      title: "Actions",
      dataIndex: "id",
      key: "id",
      render: (id) => <>
        <Tooltip title="Edit this product">
          <Button onClick={() => handleEdit(id)} type="dashed">
            Edit
          </Button>
        </Tooltip>
        <Tooltip title="Move to recycle bin">
          <Button style={{ float: "right" }} onClick={() => handleDelete(id)} type="dashed" danger
                  icon={<DeleteOutlined/>}>
            &nbsp;
          </Button>
        </Tooltip>
      </>
    }
  ]

  return (
    <>
      <Table dataSource={productsAllWithoutRecycleBin} columns={columns} rowKey="id"/>
      <Modal
        title="Delete product in recycle bin?"
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