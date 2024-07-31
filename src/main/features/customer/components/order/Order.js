import { Grid } from "@mui/material";
import React from "react";
import { ORDER_STATUS } from "../../../../shared/utils/Order";
import { OrderCard } from "./OrderCard";

const Order = () => {
    return (
        <div className="lg:px-10 mt-10">
            <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid item xs={2.5}>
                    <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
                        <h1 className="font-bold text-lg">Filter</h1>

                        <div className="space-y-4 mt-10">
                            <h1 className="font-semibold">Order Status</h1>
                            {ORDER_STATUS.map((status, index) => (
                                <div className="flex items-center" key={index}>
                                    <input
                                        defaultValue={status.value}
                                        type="checkbox"
                                        className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                                    ></input>
                                    <label className="ml-2 text-sm text-gray-700" htmlFor={status.value}>
                                        {status.name}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </Grid>

                <Grid item xs={9} className="space-y-5">
                    {[1, 1, 1, 1].map((item, index) => (
                        <OrderCard key={index} />
                    ))}
                </Grid>
            </Grid>
        </div>
    );
};

export default Order;
