// Basket.js
import React from 'react';
import basketData from '../data.js/basketData'; // Sample product data

function Basket() {
    return (
        <>
            {/* Display product cards */}
            {basketData.slice(0, 8).map((item) => (
                <BasketCard item={item} key={item.id} />
            ))}
        </>
    );
}

export default Basket;
