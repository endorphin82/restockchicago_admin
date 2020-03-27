import { gql } from "apollo-boost"

export const addProductMutation = gql`
    mutation AddProduct($name: String!, $price: Int!, $categoryId: ID!, $images: [String] ) {
        addProduct(name: $name, price: $price, categoryId: $categoryId, images: $images ){
            name
        }
    }
`

export const updateProductMutation = gql`
    mutation UpdateProduct($id: ID, $name: String!, $price: Int!, $categoryId: ID!, $images: [String] ) {
        updateProduct(id: $id, name: $name, price: $price, categoryId: $categoryId, images: $images ){
            name
        }
    }
`

export const deleteProductMutation = gql`
    mutation DeleteProduct($id: ID) {
        deleteProduct(id: $id){
            id
        }
    }
`