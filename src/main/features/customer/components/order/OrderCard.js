import AdjustIcon from "@mui/icons-material/Adjust";
import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const OrderCard = () => {
    const navigate = useNavigate();

    const handleClickOrder = (id) => {
        navigate(`/account/order/${id}`);
    }

    return (
        <div className="p-5 shadow-lg hover:shadow-2xl border">
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }} onClick={handleClickOrder}>
                <Grid item xs={5}>
                    <div className="flex cursor-pointer">
                        <img
                            src="https://rukminim1.flixcart.com/image/612/612/l0wrafk0/dress/l/2/o/3xl-m2s13003-peach-madame-original-imagchhhwbypcann.jpeg?q=70"
                            alt=""
                            className="w-[5rem] h-[5rem] object-cover object-top"
                        />

                        <div className="ml-5 space-y-2">
                            <p>Name</p>
                            <p className="opacity-50 text-xs font-semibold">Size: M</p>
                            <p className="opacity-50 text-xs font-semibold">Color: Black</p>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={3}>
                    <p>$100.000 VND</p>
                </Grid>

                <Grid item xs={4}>
                    {true && (
                        <>
                            <p>
                                <AdjustIcon sx={{ color: "green", width: "15px", height: "15px" }}/>
                                <span>Deliver on 12/12/2024</span>
                            </p>
                            <p className="text-xs">Your order has been delivered</p>
                        </>
                    )}

                    {!true && (
                        <p>
                            <span>Expected delivered on 13/12/2024</span>
                        </p>
                    )}
                </Grid>
            </Grid>
        </div>
    );
};
