import { gql } from "apollo-boost"

export const productsAllQuery = gql`
    query productsAll{
        productsAll{
            id
            name
            price
            images
            icon
            category{
                id
                name
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
            images
            icon
            category{
                id
                name
                icons
            }
        }
    }
`

