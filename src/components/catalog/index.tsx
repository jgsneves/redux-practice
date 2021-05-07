import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct, IState } from '../../declarate';
import { addProductToCartRequest } from '../../store/modules/cart/actions';
import { CatalogItem } from '../catalogItem';

export const Catalog: React.FC = () => {
    
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

    return (
        <main>
            {catalog.map(item => (
                <CatalogItem product={item} key={item.id}/>
            ))}
        </main>
    );
}