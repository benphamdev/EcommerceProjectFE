import React from 'react';

const AddressCard = () => {
    return (
        <div>
            <div className={'border rounded-e-md shadow-md h-[30.5rem]'}>
                <div className={'p-5 py-7 border-b cursor-pointer'}>
                    <div>
                        <h1 className={'text-lg font-bold'}>Shipping Address</h1>
                        <p className={'text-sm text-gray-500'}>Address Line 1, Address Line 2, City, State, Country, Zip
                            Code</p>
                    </div>
                    <div className={'mt-5'}>
                        <h1 className={'text-lg font-bold'}>Billing Address</h1>
                        <p className={'text-sm text-gray-500'}>Address Line 1, Address Line 2, City, State, Country, Zip
                            Code</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddressCard;