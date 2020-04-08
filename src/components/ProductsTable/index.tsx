import React, { useState } from "react"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { Button, Modal, Skeleton, Table, Tooltip } from "antd"
import { productsAllQuery, productsByCategoryIdQuery } from "../Products/query"
import { deleteProductMutation, updateProductMutation } from "../Products/mutations"
import { connect } from "react-redux"
import { editProduct, setIsOpenEditProductModal } from "../../actions"
import { DeleteOutlined } from "@ant-design/icons"
import { priceToDollars } from "../../utils"
import {
  InputProductsByCategoryIdQueryVars, InputUpdateProductMutationVars,
  PropsProductsTable,
  ResponseProductsAllQueryData, ResponseProductsByCategoryIdQueryData

} from "../Products/types"
import { Category, editProductAction, Product, ProductCat, REACT_APP_RECYCLE_BIN_ID } from "../../actions/types"

const styleImagesInTable = { width: "50px", height: "100%", marginRight: "10px" }
const styleIconInTable = { width: "20px", height: "100%", marginRight: "10px" }

const ProductsTable: React.FC<PropsProductsTable> = ({ editProduct, setIsOpenEditProductModal }): any => {
  const { loading, error, data } = useQuery<ResponseProductsAllQueryData>(productsAllQuery)
  const [updateProduct, {}] = useMutation<InputUpdateProductMutationVars | any, InputUpdateProductMutationVars>(updateProductMutation
    // {
    //   refetchQueries: [{
    //     query: productsByCategoryIdQuery,
    //     variables: {
    //       categoryId: process.env.REACT_APP_RECYCLE_BIN_ID
    //     }
    //   }]
    // }
    // {
    //   update(cache, { data: { updateProduct } }) {
    //     const { productsByCategoryId } = cache.readQuery<ResponseProductsByCategoryIdQueryData, InputProductsByCategoryIdQueryVars>({
    //       query: productsByCategoryIdQuery, variables: {
    //         categoryId: REACT_APP_RECYCLE_BIN_ID
    //       }
    //     })
    //     cache.writeQuery({
    //       query: productsByCategoryIdQuery,
    //       variables: {
    //         categoryId: REACT_APP_RECYCLE_BIN_ID
    //       },
    //       data: { productsByCategoryId: productsByCategoryId.concat([updateProduct]) }
    //     })
    //   }
    // }
  )
  const [isVisualDeleteModal, setIsVisualDeleteModal] = useState(false)
  const [productDeleted, setProductDeleted] = useState<ProductCat | Product>({})
  console.log("productDeleted", productDeleted)
  /* tslint:disable */
  if (loading) {
// tslint:disable-next-line
    return (<div>Loading...</div>) // tslint:disable
  }
  if (error || !data) {
    return (<div>Error...</div>)
  }
  /* tslint:enable */
  const { productsAll } = data
  const productsAllWithoutRecycleBin = productsAll.filter((prod: ProductCat) => {
    // const { category } = prod
    return prod.category?.id !== REACT_APP_RECYCLE_BIN_ID
  })

  console.log("productsAllWithoutRecycleBin", productsAllWithoutRecycleBin)
  const handleEdit = (id: String): void => {
    const prod = productsAllWithoutRecycleBin.find((prod: ProductCat) => prod.id === id)
    editProduct(prod)
    setIsOpenEditProductModal(true)
  }

  const handleDelete = (id: String): void => {
    setIsVisualDeleteModal(true)
    setProductDeleted(productsAllWithoutRecycleBin.find((prod: ProductCat) => prod.id === id))
  }

  const handleOk = (): void => {
    console.log("productDeleted.id", productDeleted.id)
    const { id, name, price, images, icon } = productDeleted
    updateProduct({
      variables: {
        id, name, price, categoryId: process.env.REACT_APP_RECYCLE_BIN_ID, images, icon
      }

    }).then((m: any) => console.log("updateProductMESSAGE:", m))
      .catch((e: any) => console.log("updateProductERROR:", e))

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
      key: "price",
      render: (price: Number) => {
        return priceToDollars(price)
      }
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category: Category) => {
        const { name, icons, id } = category
        return (
          <div>
            <span>{name} </span>
            {
              (icons?.length !== 0)
                ? <img
                  key={icons[0]}
                  alt="img" src={icons[0]} style={styleIconInTable}/> : ""
            }
            <span> {id} </span>
          </div>)
      }
    },
    {
      title: "Images",
      dataIndex: "images",
      key: "images",
      render: (images?: String[]) => {
        return (images)
          ? <div>
            {
              images
                .map((image: String) => <img
                  key={image}
                  alt="img"
                  src={image}
                  style={styleImagesInTable}/>
                )
            }
          </div>
          : <span>no  images </span>
      }
    },
    {
      title: "Actions",
      dataIndex: "id",
      key: "id",
      render: (id: String) => <>
        <Tooltip title="Edit this product">
          <Button onClick={() => handleEdit(id)}
                  type="dashed">
            Edit
          </Button>
        </Tooltip>
        <Tooltip
          title="Move to recycle bin">
          <Button style={{ float: "right" }}
                  onClick={() => handleDelete(id)}
                  type="dashed"
                  danger
                  icon={<DeleteOutlined/>}>

          </Button>
        </Tooltip>
      </>
    }
  ]

  return (
    <>
      <Table dataSource={productsAllWithoutRecycleBin}
             columns={columns}
             rowKey="id"/>
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