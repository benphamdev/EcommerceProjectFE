import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import * as React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import PaymentDetails from "./PaymentDetails";
import ShippingAddress from "./ShippingAddress";

const steps = ['Login', 'Shipping address', 'Payment details', 'Review your order'];

export default function Checkout() {
    const [activeStep, setActiveStep] = useState(0);
    const location = useLocation();
    const query = new URLSearchParams(location.search);

    useEffect(() => {
        const step = query.get('step');
        if (step) {
            setActiveStep(parseInt(step));
        }
    }, [location]);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        // change query parameter
        handleChangeQuery((activeStep + 2).toString());
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        // change query parameter
        handleChangeQuery(activeStep.toString());
    };

    const handleChangeQuery = (step) => {
        query.set('step', step);
        window.history.pushState(null, '', '?' + query.toString());
    }

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={'px-10 lg:p-20'}>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }}/>
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }}/>

                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>

                        <div>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                {
                                    (() => {
                                        switch (activeStep) {
                                            case 0:
                                                return <h1>Login</h1>;
                                            case 1:
                                                return <ShippingAddress/>
                                            case 2:
                                                return <PaymentDetails/>
                                            case 3:
                                                return <OrderSummary/>
                                            default:
                                                return <h1>Finish step</h1>;
                                        }
                                    })()
                                }
                            </Typography>
                        </div>
                    </React.Fragment>
                )}
            </Box>
        </div>
    );
}
