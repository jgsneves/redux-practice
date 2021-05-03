import { Reducer } from "redux";

const INITIAL_STATE: ICartState = {
    items: [],
}

export const cart: Reducer<ICartState> = () => {
    return INITIAL_STATE;
};