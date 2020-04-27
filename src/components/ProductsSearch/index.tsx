import React from "react"
import { Input } from "antd"

const { Search } = Input

interface PropsProductsSearch {
  handleSearch: (e: any) => any
  handleEnterSearch: (e: any) => any
}

const ProductsSearch: React.FC<PropsProductsSearch> = ({ handleSearch, handleEnterSearch }) => {
  return (
    <Search
      onKeyPress={handleEnterSearch}
      placeholder="input search text"
      onSearch={(value) => handleSearch(value)}
      style={{ width: '30%' }}
    />
  )
}

export default ProductsSearch