import React from "react"
import { priceToDollars } from "../../utils/utils"
import { Button, Table, Tooltip, Tag } from "antd"
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined"
import { ProductsAll } from "../Products/queries/__generated__/ProductsAll"

const styleImagesInTable = { width: "50px", height: "100%", marginRight: "10px" }

interface PropsProductsTableAntd {
  handleEditProp: (id: String) => void
  handleDeleteProp: (id: String) => void
  productsAllWithoutRecycleBinProp: ProductsAll
}

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
      title: "Categories",
      dataIndex: "categories",
      key: "categories",
      render: (categories: String[]) => (
        <span>
          {categories.map(tag => (
            <Tag color="blue" key={String(tag)}>
              {tag}
            </Tag>
          ))}
        </span>
      )
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
                .map((image, index) => <img
                  key={String(`${image}+${index}`)}
                  alt="img"
                  src={String(image)}
                  style={styleImagesInTable}/>
                )
            }
          </div>
          : <span>no  images</span>
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
      <Table
        // TODO:
        // @ts-ignore
        dataSource={productsAllWithoutRecycleBinProp}
        columns={columns}
        rowKey="id"/>
    </>
  )
}

export default ProductsTableAntd