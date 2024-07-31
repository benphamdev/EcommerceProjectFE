import "./styles/App.css";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./features/routes/CustomerRouters";

function App() {
    return (
        <div className="App">
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/*'} element={<CustomerRouters/>}/>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
