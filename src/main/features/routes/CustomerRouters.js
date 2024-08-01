import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Main } from "../../Main";
import Cart from "../customer/components/cart/Cart";
import Checkout from "../customer/components/checkout/Checkout";
import Order from "../customer/components/order/Order";
import { OrderDetail } from "../customer/components/order/OrderDetail";
import ProductDetails from "../customer/components/product-details/ProductDetails";
import Product from "../customer/components/product/Product";
import HomePage from "../pages/HomePage";

const CustomerRouters = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Main/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'cart'} element={<Cart/>}/>
                    <Route path={'product'} element={<Product/>}/>
                    <Route path={'product/:id'} element={<ProductDetails/>}/>
                    <Route path={":gender/:category/:product"} element={<Product/>}/>
                    <Route path={'checkout'} element={<Checkout/>}/>
                    <Route path={'account/order/'} element={<Order/>}/>
                    <Route path={'account/order/:id'} element={<OrderDetail/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default CustomerRouters;