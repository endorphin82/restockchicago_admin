import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { Table } from "antd"
import { categoriesAllQuery } from "../Categories/query"
import { useCategoriesAll } from "../Categories/queries/__generated__/CategoriesAll"
import { Category } from "../../__generated__/types"
import { REACT_APP_RECYCLE_BIN_ID } from "../../actions/types"

const styleIconInTable = { width: "20px", height: "100%", marginRight: "10px" }

const CategoriesTable: React.FC = () => {
  const { loading, error, data } = useCategoriesAll()

  if (loading) {
    return (<div>Loading...</div>) // tslint:disable
  }
  if (error || !data) {
    return (<div>Error...</div>)
  }
  const { categoriesAll } = data
  // @ts-ignore
  const categoriesAllWithoutRecycleBin = toArraycategoriesAll?.filter((category: Category) => {
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