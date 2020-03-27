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