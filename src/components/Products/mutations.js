import { gql } from "apollo-boost"

export const addProductMutation = gql`
    mutation addProduct($name: String!, $price: Int!, $categoryId: ID!, $images: [String] ) {
        addProduct(name: $name, price: $price, categoryId: $categoryId, images: $images ){
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

export const updateProductMutation = gql`
    mutation updateProduct($id: ID!, $name: String!, $price: Int!, $categoryId: ID!, $images: [String] ) {
        updateProduct(id: $id, name: $name, price: $price, categoryId: $categoryId, images: $images ){
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

export const deleteProductMutation = gql`
    mutation deleteProduct($id: ID!) {
        deleteProduct(id: $id){
            id
        }
    }
`