import React from "react"
import { PropsRecycleBinIcon } from "../Products/types"

const RecycleBinIcon: React.FC<PropsRecycleBinIcon> = ({ categoryById, productsByCategoryId }) => {
  // @ts-ignore
  if (productsByCategoryId.length == 0)
    return (
      // @ts-ignore
      <img src={categoryById.icons[0]} width={15} alt="recycle bin"/>
    )
  return (
    // @ts-ignore
    <img src={categoryById.icons[3]} width={15} alt="recycle bin"/>
  )
}

export default RecycleBinIcon