import { StarIcon } from "@heroicons/react/24/outline";
import { Box, Grid } from "@mui/material";
import React from "react";
import AddressCard from "../address-card/AddressCard";
import { OrderTracking } from "./OrderTracking";

export const OrderDetail = () => {
    return (
        <div className="px:5 lg:px-10">
            <div>
                <h2 className="font-bold text-lg py-7">Delivery address</h2>
                <AddressCard />
            </div>

            <div className="py-20">
                <OrderTracking activeStep={1} />
            </div>

            <Grid container spacing={2} className="space-x-5">
                <Grid
                    className="shadow-xl rounded-md p-5 border"
                    item
                    xs={12}
                    sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Grid item xs={6}>
                        <div>
                            <img
                                className="w-[5rem] h-[5rem] object-cover object-top"
                                src="https://via.placeholder.com/150"
                                alt="product"
                            />
                            <div className="space-y-5 ml-5">
                                <h2 className="text-lg font-semibold">Product Name</h2>
                                <p className="opacity-25 text-xs font-semibold space-x-1">
                                    <span className="text-gray-600">Size: L</span>
                                    <span className="text-gray-600">Color: Red</span>
                                </p>
                                <p className="text-gray-600">Price: $100</p>
                                <p>Seller: duy chien</p>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={6}>
                        <Box
                            sx={{
                                color: "deeppink[500]",
                            }}
                        >
                            <StarIcon />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};
