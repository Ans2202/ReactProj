// AddToBasketList.js
import React from 'react';
import { useCart } from '../context/CartContext'; // Custom context for managing cart state
import BasketItem from './BasketItem';
import TotalPrice from './TotalPrice';

function AddToBasketList() {
    const { cartItems, removeFromCart, totalPrice } = useCart();

    const handleDeleteItem = (deletedItem, deletedPrice) => {
        removeFromCart(deletedItem, deletedPrice);
    };

    return (
        <>
            {/* Display cart items */}
            {cartItems.map((item) => (
                <BasketItem
                    item={item}
                    key={item.id}
                    onDelete={handleDeleteItem}
                />
            ))}

            {/* Display total price */}
            <TotalPrice totalPrice={totalPrice} />
        </>
    );
}

export default AddToBasketList;
