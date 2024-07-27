import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";

export const Main = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<App/>}/>
            </Routes>
        </Suspense>
    )
}