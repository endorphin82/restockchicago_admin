import React, { useState } from "react"
import { Button, Modal, Table, Tooltip, Tag } from "antd"
import { CategoriesAllDocument, useCategoriesAll } from "../Categories/queries/__generated__/CategoriesAll"
import { REACT_APP_RECYCLE_BIN_ID } from "../../actions/types"
import { Category, Product } from "../../__generated__/types"
import { useDeleteCascadeCategoryWithProductsById } from "../Categories/mutations/__generated__/DeleteCascadeCategoryWithProductsById"
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined"
import { editCategory } from "../../actions"
import { setIsOpenEditCategoryModal } from "../../actions"
import { connect } from "react-redux"

const styleIconInTable = { width: "20px", height: "100%", marginRight: "10px" }

export interface PropsCategoryTable {
  editCategory: (product: Product | undefined) => void
  setIsOpenEditCategoryModal: (isOpen: Boolean | undefined) => void
}

const CategoriesTable: React.FC<PropsCategoryTable> = ({ editCategory, setIsOpenEditCategoryModal }) => {
  const { loading: cat_loading, error: cat_error, data: cat_data } = useCategoriesAll()
  const [deleteCascadeCategoryWithProductsById] = useDeleteCascadeCategoryWithProductsById({
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
    return category._id !== REACT_APP_RECYCLE_BIN_ID
  })

  const handleEdit = (_id: String): void => {
    const cat = categoriesAllWithoutRecycleBin?.find((cat: Category) => cat._id === _id)
    editCategory(cat)
    setIsOpenEditCategoryModal(true)
  }

  const handleDelete = (_id: String): void => {
    setIsVisualDeleteModal(true)
    setCategoryDeleted(categoriesAllWithoutRecycleBin.find((cat: Category) => cat._id === _id))
  }

  const handleOk = (_id: String) => {
    deleteCascadeCategoryWithProductsById({
      variables: {
        _id: String(_id)
      }
    }).then((mess: any) => console.log("deleteCascadeCategoryWithProductsById response:", mess))
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
      dataIndex: "_id",
      key: "_id"
    },
    {
      title: "Parent",
      dataIndex: "parent",
      key: "parent",
      render: (parent: String) => {
        return parent ?
          <span>
          <Tag color="green" key={String(parent)}>{parent}</Tag>
        </span> : null
      }
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
      dataIndex: "_id",
      key: "_id",
      render: (_id: String) => <>
        <Tooltip title="Edit this category">
          <Button onClick={() => handleEdit(_id)}
                  type="dashed">
            Edit
          </Button>
        </Tooltip>
        <Tooltip
          title="Delete Category With All Products">
          <Button style={{ float: "right" }}
                  onClick={() => handleDelete(String(_id))}
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
        onOk={() => handleOk(categoryDeleted._id)}
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