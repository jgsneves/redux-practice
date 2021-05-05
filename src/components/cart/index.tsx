import React from 'react';
import { useSelector } from 'react-redux';

export const Cart: React.FC = () => {
    const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);

    return (
        <table>
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>PReço</th>
                    <th>Quantidade</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(item => (
                    <tr key={item.product.id}>
                        <td>{item.product.title}</td>
                        <td>{item.product.price}</td>
                        <td>{item.quantity}</td>
                        <td>{(item.quantity * item.product.price).toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}