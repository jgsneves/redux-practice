import { IProduct } from "../../../declarate";

export const addProductToCartRequest = (product: IProduct) => {
    return {
        //toda action precisa retornar um objeto e precisa ter uma key
        //type, que descreve a ação da action 
        type: 'ADD_PRODUCT_TO_CART_REQUEST',
        //outra propriedade é payload, que é toda informação que precisa adicional
        //adicionar  ao carrinho.
        payload: {
            product,
        }
    }
}

export const addProductToCartSucess = (product: IProduct) => {
    return {
        type: 'ADD_PRODUCT_TO_CART_SUCCESS',
        payload: {
            product,
        }
    }
}

export const addProductToCartFailure = (productId: number) => {
    return {
        type: 'ADD_PRODUCT_TO_CART_FAILURE',
        payload: {
            productId,
        }
    }
}