import { Button, Grid, Link, Typography } from "@mui/material";
import React from 'react';

const Footer = () => {
    return (
        <div>
            <Grid className={'bg-black text-white text-center mt-10'} container
                  sx={{
                      bgcolor: 'black', color: 'white', py: 3
                  }}
            >

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className={'pb-5'} variant={'h6'}>
                        Company
                    </Typography>

                    <div>
                        <Button className={'pb-5'} variant={'h6'} gutterBottom> About </Button>
                    </div>

                    <div>
                        <Button className={'pb-5'} variant={'h6'} gutterBottom> Blog </Button>
                    </div>

                    <div>
                        <Button className={'pb-5'} variant={'h6'} gutterBottom> Press </Button>
                    </div>

                    <div>
                        <Button className={'pb-5'} variant={'h6'} gutterBottom> Jobs </Button>
                    </div>

                    <div>
                        <Button className={'pb-5'} variant={'h6'} gutterBottom> Partners </Button>
                    </div>

                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className={'pb-5'} variant={'h6'}>
                        Solutions
                    </Typography>

                    <div>
                        <Button className={'pb-5'} variant={'h6'} gutterBottom> Marketing </Button>
                    </div>

                    <div>
                        <Button className={'pb-5'} variant={'h6'} gutterBottom> Support </Button>
                    </div>

                    <div>
                        <Button className={'pb-5'} variant={'h6'} gutterBottom> Analytics </Button>
                    </div>

                    <div>
                        <Button className={'pb-5'} variant={'h6'} gutterBottom> Commerce </Button>
                    </div>

                    <div>
                        <Button className={'pb-5'} variant={'h6'} gutterBottom> Insight </Button>
                    </div>

                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className={'pb-5'} variant={'h6'}>
                        Information
                    </Typography>

                    <div>
                        <Button className={'pb-5'} variant={'h6'} gutterBottom> General policy </Button>
                    </div>

                    <div>
                        <Button className={'pb-5'} variant={'h6'} gutterBottom> Information security policy </Button>
                    </div>

                    <div>
                        <Button className={'pb-5'} variant={'h6'} gutterBottom> Shopping guide </Button>
                    </div>

                    <div>
                        <Button className={'pb-5'} variant={'h6'} gutterBottom> Instructions for activating the
                            course </Button>
                    </div>

                    <div>
                        <Button className={'pb-5'} variant={'h6'} gutterBottom> Tuition refund policy </Button>
                    </div>

                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className={'pb-5'} variant={'h6'}>
                        Follow us
                    </Typography>

                    <div>
                        <Button className={'pb-5'} variant={'h6'} gutterBottom> Facebook
                            <Link href={'https://www.facebook.com/'} color={'inherit'} underline={'hover'}></Link>
                        </Button>
                    </div>

                    <div>
                        <Button className={'pb-5'} variant={'h6'} gutterBottom> Instagram </Button>
                    </div>

                    <div>
                        <Button className={'pb-5'} variant={'h6'} gutterBottom> Twitter </Button>
                    </div>

                    <div>
                        <Button className={'pb-5'} variant={'h6'} gutterBottom> Youtube </Button>
                    </div>
                </Grid>

                <Grid item xs={12} className={"pt-20"}>
                    <Typography className={'pb-5'} variant={'body2'} component={'p'}>
                        © 2021 Company, Inc. All rights reserved.
                    </Typography>

                    <Typography className={'pb-5'} variant={'body2'} component={'p'} align={'center'}>
                        Made with ❤️ by {' '}
                        <Link href={'https://github.com/benphamdev/EcommerceProjectFE'} color={'inherit'}
                              underline={'hover'}>
                            Chien Pham
                        </Link>
                    </Typography>

                    <Typography className={'pb-1'} variant={'body2'} component={'p'} align={'center'}>
                        Contact: {' '}
                        <Link href={'https://github.com/benphamdev/EcommerceProjectBE'} color={'inherit'}
                              underline={'hover'}>
                            phamchien152003@gmail.com
                        </Link>
                    </Typography>
                </Grid>
            </Grid>

        </div>
    );
};

export default Footer;