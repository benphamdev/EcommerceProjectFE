import React from "react";

const AddressCard = () => {
    return (
        <>
            <div className={"border rounded-e-md shadow-md h-[10rem]"}>
                <div className={"p-1 border-b cursor-pointer"}>
                    <div className={"space-y-1"}>
                        <h2 className={"text-lg font-semibold"}>Home</h2>
                        <p className={"text-gray-600"}>Name: Pham chien</p>
                        <p className={"text-gray-600"}>Address: 123, New York, USA</p>

                        <div className="space-y-1">
                            <p className={"text-gray-600"}>Phone: 1234567890</p>
                            <p className={"text-gray-600"}>Email: phamchien </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddressCard;
