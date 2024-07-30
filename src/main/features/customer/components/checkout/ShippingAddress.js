import { Box, Button, Grid, TextField } from "@mui/material";
import React from 'react';
import AddressCard from "../address-card/AddressCard";

const ShippingAddress = () => {
    return (
        <div>
            <Grid container={true} spacing={4}>
                <Grid xs={12} lg={5} className={'border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'}>
                    <div className={'p-5 py-7 border-b cursor-pointer'}>
                        <AddressCard/>

                        <Button sx={{ mt: 2, bgcolor: 'RGB(145 85 253)' }} size={'large'} variant={'contained'}>
                            Deliver to this address
                        </Button>
                    </div>
                </Grid>

                <Grid item xs={12} lg={7}>
                    <Box className={'border rounded-s-md shadow-md p-5'}>
                        <form>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required id={'firstName'} name={'firstName'} label={'First Name'}
                                        fullWidth autoComplete={'given-name'}>

                                    </TextField>

                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required id={'lastName'} name={'lastName'} label={'Last Name'}
                                        fullWidth autoComplete={'given-name'}>

                                    </TextField>

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