import React from 'react';
import AddressCard from "../address-card/AddressCard";
import Cart from "../cart/Cart";

const OrderSummary = () => {
    return (
        <div>
            <div className='p-5 shadow-lg rounded-s-md border'>
                <AddressCard/>

                <Cart/>
            </div>
        </div>
    );
};

export default OrderSummary;