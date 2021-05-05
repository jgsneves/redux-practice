import { addProductToCartRequest } from "./store/modules/cart/actions";

interface IProduct {
    id: number;
    title: string;
    price: number;
}

interface ICartItem {
    product: IProduct;
    quantity: number;
}

interface ICartState {
    items: ICartItem[];
}

interface IState {
    cart: ICartState;
}

interface IStockResponse {
    id: number;
    quantity: number;
}

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;