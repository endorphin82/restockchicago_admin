import { gql } from "apollo-boost";

export const categoriesAllQuery = gql`
    {
        categoriesAll{
            id,
            name,
            icons
        }
    }
`
export const categoryByIdQuery = gql`
    query categoryById($id: ID){
        categoryById(id: $id){
            id
            name
            icons
        }
    }
`