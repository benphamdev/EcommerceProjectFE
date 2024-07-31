import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, Grid } from "@mui/material";
import React from "react";
import AddressCard from "../address-card/AddressCard";
import { OrderTracking } from "./OrderTracking";

export const OrderDetail = () => {
    return (
        <div className="px:5 lg:px-10">
            <div>
                <h2 className="font-bold text-lg py-7">Delivery address</h2>
                <AddressCard/>
            </div>

            <div className="py-20">
                <OrderTracking activeStep={1}/>
            </div>

            <Grid container className="space-y-5 border" sx={
                {
                    padding: "20px",
                    borderRadius: "10px",
                    border: "1px solid #e5e5e5",
                }
            }>
                {[1, 2, 3].map((item) => (
                    <Grid
                        className="shadow-xl rounded-md p-5 border"
                        item
                        xs={12}
                        sx={{
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "space-between",
                            borderRadius: '1.5rem'
                        }}>

                        <Grid item xs={6}>
                            <div className={'flex items-center space-x-5'}>
                                <img
                                    className="w-[5rem] h-[5rem] object-cover object-top"
                                    src="https://via.placeholder.com/150"
                                    alt="product"
                                />
                                <div className="space-y-3 ml-3">
                                    <p className="text-lg font-semibold">Product Name</p>
                                    <p className="opacity-25 text-xs font-semibold space-x-1">
                                        <span className="text-gray-600">Size: L</span>
                                        <span className="text-gray-600">Color: Red</span>
                                    </p>
                                    <p className="text-gray-600">Price: $100</p>
                                    <p>Seller: duy chien</p>
                                </div>
                            </div>
                        </Grid>

                        <Grid item>
                            <Box sx={{
                                color: "deeppink",
                                alignItems: "center",
                                display: "flex",
                            }}>
                                <StarBorderIcon sx={{ fontSize: '2rem' }} className={'px-2 text-5xl'}/>
                                <span>Rate & Review</span>
                            </Box>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};
