import { gql } from "apollo-boost"

export const productsAllQuery = gql`
    {
        productsAll{
            id,
            name,
            price,
            images,
            category{
                id,
                name,
                icons
            }
        }
    }
`
export const productsByCategoryIdQuery = gql`
    query productsByCategoryId($categoryId: ID!){
        productsByCategoryId(categoryId: $categoryId){
            id
            name
            price
            category{
                id
                name
            }
        }
    }
`