import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./features/customer/components/footer/Footer";
import Navigation from "./features/customer/components/navigation/Navigation";

export const Main = () => {
    return (
        <>
            <div className="">
                <Navigation/>
            </div>
            <div>
                <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    );
};
