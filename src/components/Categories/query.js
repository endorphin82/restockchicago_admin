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