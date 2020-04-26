import React from "react"
import { Input } from 'antd';
const { Search } = Input;
interface PropsProductsSearch {
  name: String
  handleChange: (e:any) => void
  handleSearch: (e:any) => void
}
const ProductsSearch: React.FC<PropsProductsSearch> = ({name, handleChange, handleSearch}) => {
  return (
    <>
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        style={{ width: 300 }}
      />
    </>
  )
}

export default ProductsSearch