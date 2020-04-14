import React from "react"
import { connect } from "react-redux"
import { RootState } from "../../reducer"
import { setIsOpenEditCategoryModal } from "../../actions"

type PropsCategoryEditForm = {
  setIsOpenEditCategoryModal: (isOpen: Boolean) => void
  isOpenEditCategoryModal: Boolean
}
const CategoryEditForm: React.FC<PropsCategoryEditForm> = ({setIsOpenEditCategoryModal, isOpenEditCategoryModal}) => {
  return (
    <>

    </>
  )
}

interface StateProps {
  isOpenEditCategoryModal: Boolean
}

const mapStateToProps = (state: RootState): StateProps => ({
  isOpenEditCategoryModal: state.edit_cat_modal.isOpen
})

export default connect<typeof CategoryEditForm>(
  // TODO:
// @ts-ignore
  mapStateToProps,
  { setIsOpenEditCategoryModal }
)(CategoryEditForm)