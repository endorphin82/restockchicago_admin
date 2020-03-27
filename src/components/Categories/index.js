import React from "react"
import { Button, Tooltip } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import CategoriesTable from "../CategoriesTable"

const Categories = () => {
  return (
    <>
      <h1>Categories</h1>
      <CategoriesTable/>
      <Tooltip title="Add Category">
        <Button type="dashed" shape="circle"
                style={{ position: "fixed", bottom: "50px", right: "50px", color: "#08c" }}
        ><PlusOutlined
          style={{ fontSize: "22px", color: "#08c" }}
        /></Button>
      </Tooltip>
    </>
  )
}

export default Categories