import React, { useState } from "react"
import RecycleBinProductsTable from "../RecycleBinProductsTable"
import { Button, Modal, Tooltip } from "antd"
import { DeleteOutlined } from "@ant-design/icons"
import { useClearRecycleBin } from "../Products/mutations/__generated__/ClearRecycleBin"
import { REACT_APP_RECYCLE_BIN_ID } from "../../actions/types"
import { ProductsByCategoryIdDocument } from "../Products/queries/__generated__/ProductsByCategoryId"

const RecycleBin = () => {
  const [isVisualDeleteModal, setIsVisualDeleteModal] = useState<Boolean>(false)
  const [clearRecycleBin] = useClearRecycleBin(
    {
      refetchQueries: [{
        query: ProductsByCategoryIdDocument,
        variables: {
          id: REACT_APP_RECYCLE_BIN_ID
        }
      }]
    }
  )

  const handleDelete = () => {
    setIsVisualDeleteModal(true)
  }

  const handleOk = () => {
    clearRecycleBin().then()
    setIsVisualDeleteModal(false)
  }

  const handleCancel = () => {
    setIsVisualDeleteModal(false)
  }

  return (
    <>
      <h1 style={{ display: "inline-block" }}>Recycle bin</h1>
      <Tooltip title="Delete all products from recycle bin forever">
        <Button style={{ float: "right" }} onClick={handleDelete} type="dashed" danger icon={<DeleteOutlined/>}>
          Clear recycle bin
        </Button>
      </Tooltip>
      <Modal
        title="Clear recycle bin?"
        visible={Boolean(isVisualDeleteModal)}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DeleteOutlined/>...
      </Modal>
      <RecycleBinProductsTable/>
    </>
  )
}

export default RecycleBin