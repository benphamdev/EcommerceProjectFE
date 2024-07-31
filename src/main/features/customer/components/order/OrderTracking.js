import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import { ORDER_STEPS } from "../../../../shared/utils/Order";

export const OrderTracking = ({ activeStep }) => {
    return (
        <div className="w-full">
            <Stepper activeStep={activeStep} alternativeLabel>
                {ORDER_STEPS.map((label, index) => (
                    <Step key={index}>
                        <StepLabel key={label} sx={{ color: "#91155FD", fontSize: "40px" }}>
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
};
