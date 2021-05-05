import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../store/modules/cart/actions';

export const Catalog: React.FC = () => {
    const dispatch = useDispatch();
    const [catalog, setCatalog] = React.useState<IProduct[]>([]);

    async function getCatalogData() {
        try {
            const response: IProduct[] = await fetch("http://localhost:8000/products").then(res => res.json());
            setCatalog(response);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCatalogData();
    }, []);

    const handleAddProductToCart = useCallback((product: IProduct) => {
        dispatch(addProductToCart(product))
    }, [dispatch]);

    return (
        <main>
            {catalog.map(item => (
                <article key={item.id}>
                    <strong>{item.title}</strong> {"  -  "}
                    <span>{item.price}</span> {"  -  "}
                    <button 
                        onClick={() => handleAddProductToCart(item)}
                        type="button"
                    >Comprar</button>
                </article>
            ))}
        </main>
    );
}