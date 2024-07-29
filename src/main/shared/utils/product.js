const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    discountPrice: '$160',
    off: 'Save $32 (17%)',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

const star = [
    {
        id: '1 stars',
        rating: 1,
        full: false,
        name: '1 star',
        className: 'text-gray-600',
        selectedClassName: 'text-gray-900',
    },
    {
        id: '2 stars',
        rating: 2,
        full: false,
        name: '1 star',
        className: 'text-gray-600',
        selectedClassName: 'text-gray-900',
    },
    {
        id: '3 stars',
        rating: 3,
        full: false,
        name: '1 star',
        className: 'text-gray-600',
        selectedClassName: 'text-gray-900',
    },
    {
        id: '4 stars',
        rating: 4,
        full: true,
        name: '1 star',
        className: 'text-gray-600',
        selectedClassName: 'text-gray-900',
    },
    {
        id: '5 stars',
        rating: 5,
        full: true,
        name: '1 star',
        className: 'text-gray-600',
        selectedClassName: 'text-gray-900',
    },
    {
        id: 'All stars',
        rating: 0,
        full: false,
        name: '1 star',
        className: 'text-gray-600',
        selectedClassName: 'text-gray-900',
    }
]

const ratingCategories = [
    { label: 'Excellent', value: 80, color: 'success', className: 'green' },
    { label: 'Very Good', value: 70, color: 'success', className: 'lime' },
    { label: 'Good', value: 60, color: 'success', className: 'yellow' },
    { label: 'Average', value: 50, color: 'warning', className: 'blue' },
    { label: 'Poor', value: 30, color: 'error', className: 'red' },
];

export { product, reviews, star, ratingCategories }