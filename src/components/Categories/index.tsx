import React from "react"
import { Button, Tooltip } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import { connect } from "react-redux"
import { setIsOpenAddCategoryModal } from "../../actions"
import CategoriesTable from "../CategoriesTable"
import CategoryAddForm from "../CategoryAddForm"
import CategoryEditForm from "../CategoryEditForm"

export interface PropsCategories {
  setIsOpenAddCategoryModal: (isOpen: Boolean) => void
}

const Categories: React.FC<PropsCategories> = ({ setIsOpenAddCategoryModal }) => {
  const onClickHandler = () => {
    setIsOpenAddCategoryModal(true)
  }

  return (
    <>
      <h1>Categories</h1>
      <CategoriesTable/>
      <CategoryEditForm/>
      <CategoryAddForm/>
      <Tooltip title="Add Category">
        <Button
          onClick={onClickHandler}
          type="dashed" shape="circle"
          style={{ position: "fixed", bottom: "50px", right: "50px", color: "#08c" }}
        ><PlusOutlined
          style={{ fontSize: "22px", color: "#08c" }}
        /></Button>
      </Tooltip>
    </>
  )
}

export default connect<typeof Categories>(null, { setIsOpenAddCategoryModal })(Categories)