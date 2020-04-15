import React, { useState } from "react"
import { Button, Modal, Table, Tooltip } from "antd"
import { CategoriesAllDocument, useCategoriesAll } from "../Categories/queries/__generated__/CategoriesAll"
import { REACT_APP_RECYCLE_BIN_ID } from "../../actions/types"
import { Category } from "../../__generated__/types"
import { useDeleteCascadeCategoryWithProductsById } from "../Categories/mutations/__generated__/DeleteCascadeCategoryWithProductsById"
import { ProductsAllDocument } from "../Products/queries/__generated__/ProductsAll"
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined"
import { editCategory } from "../../actions"
import { setIsOpenEditCategoryModal } from "../../actions"
import { Product } from "../../__generated__apollo__/types-query"
import { connect } from "react-redux"

const styleIconInTable = { width: "20px", height: "100%", marginRight: "10px" }

export interface PropsCategoryTable {
  editCategory: (product: Product | undefined) => void
  setIsOpenEditCategoryModal: (isOpen: Boolean | undefined) => void
}

const CategoriesTable: React.FC<PropsCategoryTable> = ({ editCategory, setIsOpenEditCategoryModal }) => {
  const { loading: cat_loading, error: cat_error, data: cat_data } = useCategoriesAll()
  const [deleteCascadeCategoryWithProductsById, {}] = useDeleteCascadeCategoryWithProductsById({
      refetchQueries: [{
        query: CategoriesAllDocument
      }]
    }
  )
  const [isVisualDeleteModal, setIsVisualDeleteModal] = useState<Boolean>(false)
  const [categoryDeleted, setCategoryDeleted] = useState<Category | any>({})
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

  const handleEdit = (id: String): void => {
    const cat = categoriesAllWithoutRecycleBin?.find((cat: Category) => cat.id === id)
    editCategory(cat)
    setIsOpenEditCategoryModal(true)
  }

  const handleDelete = (id: String): void => {
    setIsVisualDeleteModal(true)
    setCategoryDeleted(categoriesAllWithoutRecycleBin.find((cat: Category) => cat.id === id))
  }

  const handleOk = (id: String) => {
    deleteCascadeCategoryWithProductsById({
      variables: {
        id: String(id)
      }
    }).then(mess => console.log("deleteCascadeCategoryWithProductsById response:", mess))
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
    },
    {
      title: "Images",
      dataIndex: "images",
      key: "images",
      render: (icons: String[]) => {
        return (icons.length !== 0)
          ? <div>
            {
              icons
                .map(image => <img
                  key={String(image)} alt="img"
                  src={String(image)}
                  style={styleIconInTable}/>
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
      render: (id: String) => <>
        <Tooltip title="Edit this category">
          <Button onClick={() => handleEdit(id)}
                  type="dashed">
            Edit
          </Button>
        </Tooltip>
        <Tooltip
          title="Delete Category With All Products">
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
      <Table dataSource={categoriesAllWithoutRecycleBin} columns={columns} rowKey="id"/>
      <Modal
        title="Delete Category With All Products WITHOUT recovery!?"
        visible={Boolean(isVisualDeleteModal)}
        onOk={() => handleOk(categoryDeleted.id)}
        onCancel={handleCancel}
      >
        <p>{categoryDeleted.name}</p>
      </Modal>
    </>
  )
}

export default connect<typeof CategoriesTable>(null, {
  editCategory, setIsOpenEditCategoryModal
})(CategoriesTable)