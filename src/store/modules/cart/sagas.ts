
import { AxiosResponse } from 'axios';
import { all, select, takeLatest, call, put } from 'redux-saga/effects';
import { CheckProductStockRequest, IState, IStockResponse } from '../../../declarate';
import api from '../../../service';
import { addProductToCartFailure, addProductToCartSucess } from './actions';

function* checkProductStock({ payload }: CheckProductStockRequest) {
    const {product} = payload;

    const currentQuantity: number = yield select((state: IState) => {
        return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
    });

    const availableStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`);
    
    if (availableStockResponse.data.quantity > currentQuantity) {
        yield put(addProductToCartSucess(product))
    } else {
        yield put(addProductToCartFailure(product.id))
    }
}

export default all([
    takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkProductStock)
]);