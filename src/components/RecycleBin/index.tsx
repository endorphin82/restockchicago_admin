import React, { useState } from "react"
import RecycleBinProductsTable from "../RecycleBinProductsTable"
import { Button, Modal, Tooltip } from "antd"
import { DeleteOutlined } from "@ant-design/icons"
import { productsByCategoryIdQuery } from "../Products/query"
import { useclearRecycleBin } from "../Products/mutations/__generated__/ClearRecycleBin"
import { REACT_APP_RECYCLE_BIN_ID } from "../../actions/types"

const RecycleBin = () => {
  const [isVisualDeleteModal, setIsVisualDeleteModal] = useState<Boolean>(false)
  const [clearRecycleBin] = useclearRecycleBin(
    {
      refetchQueries: [{
        query: productsByCategoryIdQuery,
        variables: {
          categoryId: REACT_APP_RECYCLE_BIN_ID
        }
      }]
    }

    // {
    // // @ts-ignore
    //   update(cache, { data: { clearRecycleBin } }) {
    //     const { productsByCategoryId } = cache.readQuery<AllTasksResult>({
    //       query: productsByCategoryIdQuery,
    //       variables: {
    //         categoryId: process.env.REACT_APP_RECYCLE_BIN_ID
    //       }
    //     })!.allTasks
    //     cache.writeQuery({
    //       query: productsByCategoryIdQuery,
    //       variables: { categoryId: process.env.REACT_APP_RECYCLE_BIN_ID },
    //       data: { productsByCategoryId: [] }
    //     })
    //   }
    // }
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

export default RecycleBin