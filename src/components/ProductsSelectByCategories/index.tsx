import React from "react"
import { Select } from "antd"
import { RootState } from "../../reducer"
import { connect } from "react-redux"

const { Option } = Select

interface Props {
  categories: String[] | [] | any
  handleChange: (e: any) => any
}

const ProductsSelectByCategories: React.FC<Props> = ({ categories, handleChange }) => {
  console.log("categories+++", categories)
  // const handleChange = (value: any) => {
  //   if (value.length < 1){
  //     value = categories
  //     console.log(`selected ${value}`)
  //   }

    // console.log(`selected ${value}`)
  // }
  // const children = [];
  // for (let i = 10; i < 36; i++) {
  //   // @ts-ignore
  //   children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  // }
  return (
    <Select
      mode="multiple"
      style={{ width: "30%" }}
      placeholder="Please select"
      onChange={(value) => handleChange(value)}
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
}

const mapStateToProps = (state: RootState): StateProps => ({
  categories: state.categories_list.categories
})

export default connect<typeof ProductsSelectByCategories>(
// @ts-ignore
  mapStateToProps
)(ProductsSelectByCategories)