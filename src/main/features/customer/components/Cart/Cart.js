import React from 'react';
import CartItem from "./CartItem";

const Cart = () => {
    return (
        <>
            <div className={'lg:grid grid-cols-3 lg:px-16 relative'}>
                {/*Left side*/}
                {
                    !true ? <div className={'flex justify-center items-center h-[90vh]'}>
                            <div className={'text-2xl font-bold text-gray-600'}>
                                Your cart is empty
                            </div>
                        </div>
                        : <CartItem/>
                }
                
                {/*Right side*/}
                <div className={'px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'}>
                    <div className={'border'}>
                        Right side
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;