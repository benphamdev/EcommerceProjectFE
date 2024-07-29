import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from 'react';

const ProductReviewCard = () => {
    return (
        <div>
            <Grid container={true} spacing={2} gap={3}>

                <Grid item xs={1}>
                    <Box>
                        <Avatar className={'text-white'} sx={{ width: 56, height: 56, bgcolor: '#91556fd' }}>
                            Review
                        </Avatar>
                    </Box>
                </Grid>

                <Grid item xs={9}>
                    <div className={'space-y-2'}>
                        <div>
                            <p>Chien</p>
                            <p className={'opacity-60'}>2 days ago</p>
                        </div>

                        <Rating name="read-only" value={5} readOnly precision={.5}/>

                        <h3 className={'text-lg font-medium text-gray-900'}>Great quality</h3>
                        
                        <p className={'text-sm text-gray-500'}>
                            I’ve been using this product for a while and I’m very happy with it.
                        </p>

                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProductReviewCard;