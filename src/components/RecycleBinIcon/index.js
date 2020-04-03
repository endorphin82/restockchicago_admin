import React from "react"

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