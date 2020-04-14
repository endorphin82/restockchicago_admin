import React from "react"
import { connect } from "react-redux"
import { RootState } from "../../reducer"
import { setIsOpenAddCategoryModal } from "../../actions"
import { useAddCategory } from "../Categories/mutations/__generated__/AddCategory"
import { IProductsAll } from "../Products/types"
import { ProductsAllDocument } from "../Products/queries/__generated__/ProductsAll"
import { CategoriesAllDocument } from "../Categories/queries/__generated__/CategoriesAll"
import { ICategoriesAll } from "../Categories/types"

type PropsCategoryAddForm = {
  setIsOpenAddCategoryModal: (isOpen: Boolean) => void
  isOpenAddCategoryModal: Boolean
}
const CategoryAddForm: React.FC<PropsCategoryAddForm> = ({ setIsOpenAddCategoryModal, isOpenAddCategoryModal }) => {
 const [addCategory, {data: daa_cat_data}] = useAddCategory(
   {
     // TODO:
     // @ts-ignore
     update(cache, { data: { addCategory } }) {
       const { categoriesAll } = cache.readQuery<ICategoriesAll>({ query: ProductsAllDocument })!.categoriesAll
       cache.writeQuery({
         query: CategoriesAllDocument,
         data: { categoriesAll: categoriesAll?.concat([addCategory]) }
       })
     },
     refetchQueries: [{
       query: CategoriesAllDocument
     }]
   }
 )
  return (
    <>

    </>
  )
}

interface StateProps {
  isOpenAddCategoryModal: Boolean
}

const mapStateToProps = (state: RootState): StateProps => ({
  isOpenAddCategoryModal: state.add_cat_modal.isOpen
})

export default connect<typeof CategoryAddForm>(
  // TODO:
// @ts-ignore
  mapStateToProps,
  { setIsOpenAddCategoryModal }
)(CategoryAddForm)