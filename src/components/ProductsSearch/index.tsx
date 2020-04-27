import React, { ChangeEvent } from "react"
import { Input } from "antd"

const { Search } = Input

interface PropsProductsSearch {
  searchname: String
  handleChange: (e: any) => void
  handleSearch: (e: any) => any
}

const ProductsSearch: React.FC<PropsProductsSearch> = ({ searchname, handleChange, handleSearch }) => {
  return (
    <>
      <Search
        onChange={handleChange}
        onKeyPress={handleSearch}
        placeholder="input search text"
        onSearch={value => console.log(value)}
        style={{ width: 300 }}
      />
    </>
  )
}

export default ProductsSearch