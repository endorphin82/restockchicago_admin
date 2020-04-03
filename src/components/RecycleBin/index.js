import React, { useState } from "react"
import RecycleBinProductsTable from "../RecycleBinProductsTable"
import { Button, Modal, Tooltip } from "antd"
import { DeleteOutlined } from "@ant-design/icons"
import { useMutation } from "@apollo/react-hooks"
import { clearRecycleBinMutation } from "../Products/mutations"


const RecycleBin = () => {
  const [isVisualDeleteModal, setIsVisualDeleteModal] = useState(false)
  const [clearRecycleBin]=useMutation(clearRecycleBinMutation)

  const handleDelete = () => {
    setIsVisualDeleteModal(true)
  }
  const handleOk = () => {
    clearRecycleBin().then(r => console.log("Cleared recycle bin"))
    setIsVisualDeleteModal(false)
  }

  const handleCancel = () => {
    setIsVisualDeleteModal(false)
  }

  return (
    <>
      <h1 style={{display: "inline-block"}}>Recycle bin</h1>
      <Tooltip title="Delete all products from recycle bin forever">
        <Button style={{float: "right"}} onClick={handleDelete} type="dashed" danger icon={<DeleteOutlined/>}>
          Clear recycle bin
        </Button>
      </Tooltip>
      <Modal
        title="Clear recycle bin?"
        visible={isVisualDeleteModal}
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