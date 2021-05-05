export const addProductToCart = (product: IProduct) => {
    return {
        //toda action precisa retornar um objeto e precisa ter uma key
        //type, que descreve a ação da action 
        type: 'ADD_PRODUCT_TO_CART',
        //outra propriedade é payload, que é toda informação que precisa adicional
        //adicionar  ao carrinho.
        payload: {
            product,
        }
    }
}