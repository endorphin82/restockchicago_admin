import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { productsByCategoryIdQuery } from "../Products/query"
import { RECYCLE_BIN_ID } from "../../actions/types"
import { categoryByIdQuery } from "../Categories/query"

const RecycleBinIcon = ({categoryById, productsByCategoryId}) => {
  if (productsByCategoryId.length == 0)
    return (
      <img src={categoryById.icons[0]} width={15} alt="recycle bin"/>
    )
  return (
      <img src={categoryById.icons[3]} width={15} alt="recycle bin"/>
  )
}

export default RecycleBinIcon