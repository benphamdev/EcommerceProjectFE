import React from 'react';
import './ProductCard.css';
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    
    return (
        <div className={'product-card w-[15rem] m-3 transition-all cursor-pointer'}>
            <div className={'h-[20rem]'}>
                <img className={'w-full h-full object-cover object-left-top'}
                     src={product.imageUrl}
                     alt=""/>
            </div>

            <div className={'info-item bg-white p-3'}>
                <div>
                    <p className={'font-bold opacity-60'}>{product.brand}</p>
                    <p>{product.title}</p>
                </div>

                <div className={'flex items-center space-x-2'}>
                    <p className={'font-semibold'}>{product.discountedPrice} VND</p>
                    <p className={'line-through opacity-60'}>{product.price} VND</p>
                    <p className={'text-green-500 font-semibold'}>{product.discountPersent}% off</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;