import React from "react"
import { CategoryRequireIcons } from "../../actions/types"
import { Product } from "../../__generated__/types"

interface PropsRecycleBinIcon {
  categoryById: CategoryRequireIcons
  productsByCategoryId: Product[]
}

const RecycleBinIcon: React.FC<PropsRecycleBinIcon> = ({ categoryById, productsByCategoryId }): any => {
  if (productsByCategoryId.length === 0) {
    return <img src={String(categoryById.icons[0])} width={15} alt="recycle bin"/>
  } else if (productsByCategoryId.length > 0) {
    return <img src={String(categoryById.icons[3])} width={15} alt="recycle bin"/>
  }
}

export default RecycleBinIcon