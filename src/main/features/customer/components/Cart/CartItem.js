import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Button, IconButton } from "@mui/material";
import React from 'react';
import { product } from "../../../../shared/utils/product";

const CartItem = () => {
    return (
        <div className={'p-5 shadow-lg border rounded-md'}>

            <div className={'flex items-center'}>

                <div className={'w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'}>
                    <img className={'w-full h-full object-cover object-top'}
                         src="https://rukminim1.flixcart.com/image/612/612/kb1470w0/jean/x/r/a/30-11274626-roadster-original-imafsgsthk6gdpjg.jpeg?q=70"
                         alt=""/>
                </div>

                <div className={'flex-1 ml-5 space-y-1'}>
                    <p className={'text-lg font-bold text-gray-800'}>
                        Roadster
                    </p>
                    <p className={'opacity-60'}>
                        Size: L, Color: Blue
                    </p>
                    <p className={'opacity-60 mt-2'}>
                        Seller: Cloudtail India
                    </p>

                    <div className={"flex space-x-5 items-center text-lg lg:text-sm text-gray-900 mt-6"}>
                        <p className="font-semibold">{product.discountPrice}</p>
                        <p className="font-semibold opacity-50 line-through">{product.price}</p>
                        <p className="text-green-600 font-semibold">{product.off}</p>
                    </div>
                </div>
            </div>

            <div className={'lg:flex items-center lg:space-x-10 pt-4'}>
                <div className={'flex items-center space-x-2'}>
                    <IconButton
                        className={'w-8 h-8 bg-gray-100 rounded-md'}
                        sx={{
                            ":hover": {
                                backgroundColor: '#efe8e6'
                            }
                        }}>
                        <RemoveCircleOutlineIcon/>
                    </IconButton>
                    <span className={'border  rounded-sm px-7 py-2'}>1</span>
                    <IconButton
                        className={'w-8 h-8 bg-gray-100 rounded-md mt-2'}
                        sx={{
                            ":hover": {
                                backgroundColor: '#efe8e6'
                            }
                        }}>
                        <AddCircleOutlineIcon/>
                    </IconButton>
                </div>

                <div className={'flex items-center space-x-2'}>
                    <Button variant={"contained"} color={"error"}
                            sx={{
                                borderRadius: '2rem',
                                padding: '0.5rem 1rem',
                                textTransform: 'capitalize',
                                ":hover": {
                                    backgroundColor: '#f44336',
                                    color: '#fff',
                                    boxShadow: '0 0 5px 0 #f44336',
                                    textColor: '#fff'
                                }
                            }}
                    >
                        Remove
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;