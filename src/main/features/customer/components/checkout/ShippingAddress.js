import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../address-card/AddressCard";

const ShippingAddress = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        const data = new FormData(e.target);
        const formData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            address: data.get("address"),
            city: data.get("city"),
            province: data.get("province"),
            phoneNumber: data.get("phoneNumber"),
        };
        console.log(formData);
    };

    return (
        <div>
            <Grid container={true} spacing={4}>
                <Grid
                    xs={12}
                    lg={5}
                    className={"border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll  mt-8"}
                >
                    <div className={"p-5 py-7 border-b cursor-pointer "}>
                        <AddressCard />

                        <Button
                            sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
                            size={"large"}
                            variant={"contained"}
                        >
                            Deliver to this address
                        </Button>
                    </div>
                </Grid>

                <Grid item xs={12} lg={7}>
                    <Box className={"border rounded-s-md shadow-md p-5"}>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id={"firstName"}
                                        name={"firstName"}
                                        label={"First Name"}
                                        fullWidth
                                        autoComplete={"given-name"}
                                    ></TextField>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id={"lastName"}
                                        name={"lastName"}
                                        label={"Last Name"}
                                        fullWidth
                                        autoComplete={"given-name"}
                                    ></TextField>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id={"address"}
                                        name={"address"}
                                        label={"Address"}
                                        fullWidth
                                        autoComplete={"given-name"}
                                    ></TextField>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id={"city"}
                                        name={"city"}
                                        label={"City"}
                                        fullWidth
                                        autoComplete={"given-name"}
                                    ></TextField>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id={"province"}
                                        name={"province"}
                                        label={"Province"}
                                        fullWidth
                                        autoComplete={"given-name"}
                                    ></TextField>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id={"phoneNumber"}
                                        name={"phoneNumber"}
                                        label={"Phone Number"}
                                        fullWidth
                                        autoComplete={"given-name"}
                                    ></TextField>
                                </Grid>

                                <Grid item xs={12}>
                                    <Button
                                        sx={{ bgcolor: "RGB(145 85 253)" }}
                                        size={"large"}
                                        variant={"contained"}
                                        type="submit"
                                    >
                                        Deliver to this address
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default ShippingAddress;
