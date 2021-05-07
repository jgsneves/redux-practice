import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct, IState } from '../../declarate';
import { addProductToCartRequest } from '../../store/modules/cart/actions';

interface CatalogItemProps {
    product: IProduct
}

export const CatalogItem: React.FC<CatalogItemProps> = ({product}) => {
    const dispatch = useDispatch();

    const hasFailedStockCheck = useSelector<IState, boolean>(state => {
        return state.cart.failedStockCheck.includes(product.id)
    });

    const handleAddProductToCart = useCallback((product: IProduct) => {
        dispatch(addProductToCartRequest(product))
    }, [dispatch, product]);

    return (
        <article>
            <strong>{product.title}</strong> {"  -  "}
            <span>{product.price}</span> {"  -  "}
            <button 
                onClick={() => handleAddProductToCart(product)}
                type="button"
            >Comprar</button>
            { hasFailedStockCheck && <span style={{color: 'red'}}>Falta de estoque</span>}
        </article>
    );
}