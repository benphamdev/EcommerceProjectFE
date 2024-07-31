import { Button } from "@mui/material";
import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
    return (
        <>
            <div className={"lg:grid grid-cols-3 lg:px-16 relative mt-10"}>
                {/*Left side*/}
                {!true ? (
                    <div className={"flex justify-center items-center h-[90vh]"}>
                        <div className={"text-2xl font-bold text-gray-600"}>Your cart is empty</div>
                    </div>
                ) : (
                    <div className={"col-span-2 space-y-10"}>
                        {[1, 1, 1, 1, 1, 1].map((item, index) => (
                            <CartItem key={index} />
                        ))}
                    </div>
                )}

                {/*Right side*/}
                <div className={"px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0"}>
                    <div className={"border"}>
                        <p className={"uppercase font-bold opacity-60 pb-4"}>Price details</p>

                        <hr />

                        <div className={"space-y-3 text-sm font-semibold"}>
                            <div className={"flex justify-between items-center"}>
                                <span className={""}>Price (1 item)</span>
                                <span className={"text-amber-900"}> $999</span>
                            </div>

                            <div className={"flex justify-between items-center"}>
                                <span className={""}>Discount : </span>
                                <span className={"text-amber-900"}>-$999</span>
                            </div>

                            <div className={"flex justify-between items-center"}>
                                <span className={""}>Delivery charge : </span>
                                <span className={"text-amber-900"}>$999</span>
                            </div>

                            <div className={"flex justify-between items-center"}>
                                <span className={""}>Total amount : </span>
                                <span className={"text-red-700"}>$ 999</span>
                            </div>

                            <Button
                                sx={{
                                    bgcolor: "#9155fd",
                                    color: "white",
                                    padding: "0.5rem 1rem",
                                    borderRadius: "0.5rem",
                                    height: "3rem",
                                    ":hover": {
                                        bgcolor: "#4a754a",
                                        boxShadow: "0 0 5px 0 #4a754a",
                                        textColor: "#110a0a",
                                    },
                                }}
                                variant="contained"
                                className="flex w-full items-center justify-center rounded-md border"
                            >
                                Buy now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
