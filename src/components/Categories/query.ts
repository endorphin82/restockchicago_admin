import { gql } from "apollo-boost";

export const categoriesAllQuery = gql`
    query categoriesAll{
        categoriesAll{
            id
            name
            icons
            images
        }
    }
`
export const categoryByIdQuery = gql`
    query categoryById($id: ID){
        categoryById(id: $id){
            id
            name
            icons
            images
        }
    }
`