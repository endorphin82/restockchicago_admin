import React, { useState } from "react"
import RecycleBinProductsTable from "../RecycleBinProductsTable"
import { Button, Modal, Tooltip } from "antd"
import { DeleteOutlined } from "@ant-design/icons"
import { useMutation } from "@apollo/react-hooks"
import { clearRecycleBinMutation } from "../Products/mutations"
import { productsByCategoryIdQuery } from "../Products/query"
import { IclearRecycleBin, clearRecycleBin_clearRecycleBin } from "../../__generated__apollo__/types-mutation"
import { IproductsByCategoryId } from "../../__generated__apollo__/types-query"
import { AllTasksResult } from "../Products/types"

const RecycleBin = () => {
  const [isVisualDeleteModal, setIsVisualDeleteModal] = useState<Boolean>(false)
  const [clearRecycleBin] = useMutation(clearRecycleBinMutation,
    {
      update(cache, { data: { clearRecycleBin } }) {
        const { productsByCategoryId } = cache.readQuery<AllTasksResult>({
          query: productsByCategoryIdQuery,
          variables: {
            categoryId: process.env.REACT_APP_RECYCLE_BIN_ID
          }
        })!.allTasks
        cache.writeQuery({
          query: productsByCategoryIdQuery,
          variables: { categoryId: process.env.REACT_APP_RECYCLE_BIN_ID },
          data: { productsByCategoryId: [] }
        })
      }
    }
  )

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
      <h1 style={{ display: "inline-block" }}>Recycle bin</h1>
      <Tooltip title="Delete all products from recycle bin forever">
        <Button style={{ float: "right" }} onClick={handleDelete} type="dashed" danger icon={<DeleteOutlined/>}>
          Clear recycle bin
        </Button>
      </Tooltip>
      <Modal
        title="Clear recycle bin?"
        // @ts-ignore
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

// @ts-ignore
export default RecycleBin