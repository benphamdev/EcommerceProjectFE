import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Main } from "../../Main";
import Product from "../customer/components/product/Product";
import HomePage from "../pages/HomePage";

const CustomerRouters = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Main/>}>
                    <Route index element={<HomePage/>}/>
                    {/*<Route path={'/cart'} element={<Cart/>}/>*/}
                    <Route path={'product'} element={<Product/>}>
                        {/*<Route path={'product/:id'} element={<ProductDetails/>}/>*/}
                    </Route>

                    <Route path=":gender/:category/:product" element={<Product/>}/>
                </Route>
                {/* <Checkout/> */}
                {/* <Order /> */}
                {/*<Route path={'/order/:id'} element={<OrderDetail/>}/>*/}
            </Routes>
        </>
    );
};

export default CustomerRouters;