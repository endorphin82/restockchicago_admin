import React from "react"
import { Select } from "antd"
import { RootState } from "../../reducer"
import { connect } from "react-redux"

const { Option } = Select

interface Props {
  categories: String[] | [] | any
  handleChange: (e: any) => any
  searchCategories: String[] | [] | undefined
}


const ProductsSelectByCategories: React.FC<Props> = ({ categories, handleChange, searchCategories }) => {
  return (
    <Select
      mode="multiple"
      // @ts-ignore
      defaultValue={searchCategories.length === categories.length ? [] : searchCategories}
      style={{ width: "30%" }}
      placeholder="Please select categories"
      onChange={(value: string[]) => {
        // if categories empty, search all categories
        return value?.length === 0 ?
          handleChange(categories)
          :
          handleChange(value)
      }}
    >
      {categories?.map((cat: String) => {
          return <Option
            // @ts-ignore
            key={cat}>
            {cat}
          </Option>
        }
      )
      }
    </Select>
  )
}

interface StateProps {
  categories: String[]
  searchCategories: String[]
}

const mapStateToProps = (state: RootState): StateProps => ({
  categories: state.categories_list.categories,
  searchCategories: state.search_categories_list.searchCategories
})

export default connect<typeof ProductsSelectByCategories>(
// @ts-ignore
  mapStateToProps
)(ProductsSelectByCategories)
