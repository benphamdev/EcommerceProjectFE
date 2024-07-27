export const color = [
    "While",
    "Black",
    "Red",
    "Marun",
    "Being",
    "Pink",
    "Green",
    "Yellow",
];

export const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            { value: "white", label: "White" },
            { value: "beige", label: "Beige" },
            { value: "blue", label: "Blue" },
            { value: "brown", label: "Brown" },
            { value: "green", label: "Green" },
            { value: "purple", label: "Purple" },
            { value: "yellow", label: "Yellow" },
        ],
    },
    {
        id: "size",
        name: "Size",
        options: [
            { value: "S", label: "S" },
            { value: "M", label: "M" },
            { value: "L", label: "L" },
        ],
    },
];

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: "159-399", label: "159 To 399 VND" },
            { value: "399-999", label: "399 To 999 VND" },
            { value: "999-1999", label: "999 To 1999 VND" },
            { value: "1999-2999", label: "1999 To 2999 VND" },
            { value: "2999-3999", label: "2999 To 3999 VND" },
        ],
    },
    {
        id: "discount",
        name: "Discount range",
        options: [
            { value: "10", label: "10% And Above" },
            { value: "20", label: "20% And Above" },
            { value: "30", label: "30% And Above" },
            { value: "40", label: "40% And Above" },
            { value: "50", label: "50% And Above" },
            { value: "60", label: "60% And Above" },
            { value: "70", label: "70% And Above" },
            { value: "80", label: "80% And Above" },
        ],
    },
    {
        id: "stock",
        name: 'Availability',
        options: [
            { value: "in_stock", label: "In stock" },
            { value: "out_of_stock", label: "Out of stock" }
        ]
    }
];

export const sortOptions = [
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
];

// const subCategories = [
//     { name: 'Totes', href: '#' },
//     { name: 'Backpacks', href: '#' },
//     { name: 'Travel Bags', href: '#' },
//     { name: 'Hip Bags', href: '#' },
//     { name: 'Laptop Sleeves', href: '#' },
// ]
// const filters = [
//     {
//         id: 'color',
//         name: 'Color',
//         options: [
//             { value: 'white', label: 'White', checked: false },
//             { value: 'beige', label: 'Beige', checked: false },
//             { value: 'blue', label: 'Blue', checked: true },
//             { value: 'brown', label: 'Brown', checked: false },
//             { value: 'green', label: 'Green', checked: false },
//             { value: 'purple', label: 'Purple', checked: false },
//         ],
//     },
//     {
//         id: 'category',
//         name: 'Category',
//         options: [
//             { value: 'new-arrivals', label: 'New Arrivals', checked: false },
//             { value: 'sale', label: 'Sale', checked: false },
//             { value: 'travel', label: 'Travel', checked: true },
//             { value: 'organization', label: 'Organization', checked: false },
//             { value: 'accessories', label: 'Accessories', checked: false },
//         ],
//     },
//     {
//         id: 'size',
//         name: 'Size',
//         options: [
//             { value: '2l', label: '2L', checked: false },
//             { value: '6l', label: '6L', checked: false },
//             { value: '12l', label: '12L', checked: false },
//             { value: '18l', label: '18L', checked: false },
//             { value: '20l', label: '20L', checked: false },
//             { value: '40l', label: '40L', checked: true },
//         ],
//     },
// ]
