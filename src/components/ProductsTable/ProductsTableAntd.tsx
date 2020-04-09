import React from "react"
import { ColumnProps } from "antd/es/table"
import { Category } from "../../actions/types"
import { priceToDollars } from "../../utils"
import { Button, Table, Tooltip } from "antd"
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined"
import { PropsProductsTableAntd } from "../Products/types"

const styleImagesInTable = { width: "50px", height: "100%", marginRight: "10px" }
const styleIconInTable = { width: "20px", height: "100%", marginRight: "10px" }

const ProductsTableAntd: React.FC<PropsProductsTableAntd> = ({ handleEditProp, handleDeleteProp, productsAllWithoutRecycleBinProp }) => {
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
                  // @ts-ignore
                  key={icons[0]}
                  // @ts-ignore
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
      render: (images: String[]) => {
        return (images)
          ? <div>
            {
              images
                .map((image) => <img
                  // @ts-ignore

                  key={image}
                  alt="img"
                  // @ts-ignore
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
          <Button onClick={() => handleEditProp(id)}
                  type="dashed">
            Edit
          </Button>
        </Tooltip>
        <Tooltip
          title="Move to recycle bin">
          <Button style={{ float: "right" }}
                  onClick={() => handleDeleteProp(id)}
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
      // @ts-ignore
      <Table dataSource={productsAllWithoutRecycleBinProp}
             columns={columns}
             rowKey="id"/>
    </>
  )
}

export default ProductsTableAntd