import React from "react"
import { Table } from "antd"
import { useCategoriesAll } from "../Categories/queries/__generated__/CategoriesAll"
import { REACT_APP_RECYCLE_BIN_ID } from "../../actions/types"
import { Category } from "../../__generated__/types"

const styleIconInTable = { width: "20px", height: "100%", marginRight: "10px" }

const CategoriesTable: React.FC = () => {
  const { loading: cat_loading, error: cat_error, data: cat_data } = useCategoriesAll()

  if (cat_loading) {
    return (<div>Loading...</div>)
  }
  if (cat_error || !cat_data) {
    return (<div>Error...</div>)
  }
  const { categoriesAll } = cat_data

  // @ts-ignore
  const categoriesAllWithoutRecycleBin = categoriesAll?.filter((category: Category) => {
    return category.id !== REACT_APP_RECYCLE_BIN_ID
  })
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
      title: "Icons",
      dataIndex: "icons",
      key: "icons",
      render: (icons: String[]) => {
        return (icons.length !== 0)
          ? <div>
            {
              icons
                .map(icon => <img
                  key={String(icon)} alt="img"
                  src={String(icon)}
                  style={styleIconInTable}/>
                )
            }
          </div>
          : <span>no icons</span>
      }
    }
  ]

  return (
    <>
      <Table dataSource={categoriesAllWithoutRecycleBin} columns={columns} rowKey="id"/>
    </>
  )
}

export default CategoriesTable