const ORDER_STATUS = [
    {
        id: 1,
        name: "Pending",
        value: "pending",
    },
    {
        id: 2,
        name: "Processing",
        value: "processing",
    },
    {
        id: 3,
        name: "Delivered",
        value: "delivered",
    },
    {
        id: 4,
        name: "Cancelled",
        value: "cancelled",
    },
];

const ORDER_STEPS = [
    "Order Placed",
    "Order Confirmed",
    "Order Shipped",
    "Order Out Of Delivered",
    "Order Delivered",
];

export { ORDER_STATUS, ORDER_STEPS };
