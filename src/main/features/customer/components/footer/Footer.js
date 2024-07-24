import { Button, Grid, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
    return (
        <div>
            <Grid
                className={"bg-black text-white text-center mt-10"}
                container
                sx={{
                    bgcolor: "black",
                    color: "white",
                    py: 3,
                }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className={"pb-5"} variant={"h6"} gutterBottom>
                        Company
                    </Typography>

                    <div>
                        <Button className={"pb-5"} variant={"h6"}>
                            {" "}
                            About{" "}
                        </Button>
                    </div>

                    <div>
                        <Button className={"pb-5"} variant={"h6"}>
                            {" "}
                            Blog{" "}
                        </Button>
                    </div>

                    <div>
                        <Button className={"pb-5"} variant={"h6"}>
                            {" "}
                            Press{" "}
                        </Button>
                    </div>

                    <div>
                        <Button className={"pb-5"} variant={"h6"}>
                            {" "}
                            Jobs{" "}
                        </Button>
                    </div>

                    <div>
                        <Button className={"pb-5"} variant={"h6"}>
                            {" "}
                            Partners{" "}
                        </Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className={"pb-5"} variant={"h6"} gutterBottom>
                        Solutions
                    </Typography>

                    <div>
                        <Button className={"pb-5"} variant={"h6"}>
                            {" "}
                            Marketing{" "}
                        </Button>
                    </div>

                    <div>
                        <Button className={"pb-5"} variant={"h6"}>
                            {" "}
                            Support{" "}
                        </Button>
                    </div>

                    <div>
                        <Button className={"pb-5"} variant={"h6"}>
                            {" "}
                            Analytics{" "}
                        </Button>
                    </div>

                    <div>
                        <Button className={"pb-5"} variant={"h6"}>
                            {" "}
                            Commerce{" "}
                        </Button>
                    </div>

                    <div>
                        <Button className={"pb-5"} variant={"h6"}>
                            {" "}
                            Insight{" "}
                        </Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className={"pb-5"} variant={"h6"} gutterBottom>
                        Information
                    </Typography>

                    <div>
                        <Button className={"pb-5"} variant={"h6"}>
                            {" "}
                            General policy{" "}
                        </Button>
                    </div>

                    <div>
                        <Button className={"pb-5"} variant={"h6"}>
                            {" "}
                            Information security policy{" "}
                        </Button>
                    </div>

                    <div>
                        <Button className={"pb-5"} variant={"h6"}>
                            {" "}
                            Shopping guide{" "}
                        </Button>
                    </div>

                    <div>
                        <Button className={"pb-5"} variant={"h6"}>
                            {" "}
                            Instructions for activating the course{" "}
                        </Button>
                    </div>

                    <div>
                        <Button className={"pb-5"} variant={"h6"}>
                            {" "}
                            Tuition refund policy{" "}
                        </Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className={"pb-5"} variant={"h6"} gutterBottom>
                        Follow us
                    </Typography>

                    <div>
                        <Button className={"pb-5"} variant={"h6"}>
                            {" "}
                            Facebook
                            <Link
                                href={"https://www.facebook.com/"}
                                color={"inherit"}
                                underline={"hover"}
                            ></Link>
                        </Button>
                    </div>

                    <div>
                        <Button className={"pb-5"} variant={"h6"}>
                            {" "}
                            Instagram{" "}
                        </Button>
                    </div>

                    <div>
                        <Button className={"pb-5"} variant={"h6"}>
                            {" "}
                            Twitter{" "}
                        </Button>
                    </div>

                    <div>
                        <Button className={"pb-5"} variant={"h6"}>
                            {" "}
                            Youtube{" "}
                        </Button>
                    </div>
                </Grid>

                <Grid item xs={12} className={"pt-20"}>
                    <Typography className={"pb-5"} variant={"body2"} component={"p"} gutterBottom>
                        © 2021 Company, Inc. All rights reserved.
                    </Typography>

                    <Typography className={"pb-5"} variant={"body2"} component={"p"} align={"center"} gutterBottom>
                        Made with ❤️ by{" "}
                        <Link
                            color={"inherit"}
                            href={"https://github.com/benphamdev/EcommerceProjectFE"}
                            underline={"hover"}
                        >
                            Chien Pham
                        </Link>
                    </Typography>

                    <Typography className={"pb-1"} variant={"body2"} component={"p"} align={"center"} gutterBottom>
                        Contact:{" "}
                        <Link
                            href={"https://github.com/benphamdev/EcommerceProjectBE"}
                            color={"inherit"}
                            underline={"hover"}
                        >
                            phamchien152003@gmail.com
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
