import { ActionTypes, IProduct } from "../../../declarate";

export const addProductToCartRequest = (product: IProduct) => {
    return {
        //toda action precisa retornar um objeto e precisa ter uma key
        //type, que descreve a ação da action 
        type: ActionTypes.addProductToCartRequest,
        //outra propriedade é payload, que é toda informação que precisa adicional
        //adicionar  ao carrinho.
        payload: {
            product,
        }
    }
}

export const addProductToCartSucess = (product: IProduct) => {
    return {
        type: ActionTypes.addProductToCartSuccess,
        payload: {
            product,
        }
    }
}

export const addProductToCartFailure = (productId: number) => {
    return {
        type: ActionTypes.addProductToCartFailure,
        payload: {
            productId,
        }
    }
}