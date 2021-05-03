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
