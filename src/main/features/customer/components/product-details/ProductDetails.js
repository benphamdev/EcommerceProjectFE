import { Radio, RadioGroup } from "@headlessui/react";
import { Box, Button, Grid, LinearProgress, Rating } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mens_kurta } from "../../../../shared/data/Men/men_kurta";
import { classNames } from "../../../../shared/utils/FunctionCommon";
import { product, ratingCategories, star } from "../../../../shared/utils/product";
import HomeSectionCard from "../home-section-card/HomeSectionCard";
import ProductReviewCard from "./ProductReviewCard";

export default function ProductDetails() {
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [selectedStar, setSelectedStar] = useState(star[5]);
    const navigate = useNavigate();
    const toggleShowFullDescription = () => setShowFullDescription(!showFullDescription);

    const handleAddCart = () => {
        navigate("/cart");
    };

    return (
        <div className="bg-white">
            <div className="pt-6">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb">
                    <ol
                        role="list"
                        className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
                    >
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a
                                        href={breadcrumb.href}
                                        className="mr-2 text-sm font-medium text-gray-900"
                                    >
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        fill="currentColor"
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"/>
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a
                                href={product.href}
                                aria-current="page"
                                className="font-medium text-gray-500 hover:text-gray-600"
                            >
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                {/* Product */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
                    {/* Image gallery */}
                    <div className="flex flex-col items-center">
                        <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                            <img
                                alt={product.images[0].alt}
                                src={product.images[0].src}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>

                        <div className="flex flex-wrap space-x-5 justify-center mt-10">
                            {product.images.slice(1, 4).map((image, index) => (
                                <div
                                    className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg
                                    max-w-[5rem] max-h-[5rem]"
                                    key={"image-" + index}
                                >
                                    <img
                                        alt={image.alt}
                                        src={image.src}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product info */}
                    <div
                        className="lg:col-span-1 max-t-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24-">
                        {/* Product title and description */}
                        <div className="lg:col-span-2">
                            <h1 className="text-lg lg:text-xl font-semibold text-gray-900">{product.name}</h1>
                            <h1 className="text-lg lg:text-xl font-semibold text-gray-900 opacity-60 pt-4">
                                lorem ipsum dolor sit amet
                            </h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>

                            {/* Price */}
                            <div className={"flex space-x-5 items-center  text-gray-900 mt-6"}>
                                <p className="font-semibold">{product.discountPrice}</p>
                                <p className="font-semibold opacity-50 line-through">{product.price}</p>
                                <p className="text-green-600 font-semibold">{product.off}</p>
                            </div>

                            {/* Reviews */}
                            <div className="mt-6">
                                <div className={"flex items-center space-x-3"}>
                                    <Rating name="read-only" value={3} readOnly/>
                                    <p className={"opacity-50 text-sm"}>500 ratings</p>
                                    <p
                                        className={
                                            "ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-600"
                                        }
                                    >
                                        300 reviews
                                    </p>
                                </div>
                            </div>

                            {/* Color and size */}
                            <form className="mt-10">
                                {/* Colors */}
                                <div>
                                    <h3 className="text-xs font-medium text-gray-900">Color</h3>

                                    <fieldset aria-label="Choose a color" className="mt-4">
                                        <RadioGroup
                                            value={selectedColor}
                                            onChange={setSelectedColor}
                                            className="flex items-center space-x-3"
                                        >
                                            {product.colors.map((color) => (
                                                <Radio
                                                    key={color.name}
                                                    value={color}
                                                    aria-label={color.name}
                                                    className={classNames(
                                                        color.selectedClass,
                                                        "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1"
                                                    )}
                                                >
                                                    <span
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            color.class,
                                                            "h-8 w-8 rounded-full border border-black border-opacity-10"
                                                        )}
                                                    />
                                                </Radio>
                                            ))}
                                        </RadioGroup>
                                    </fieldset>
                                </div>

                                {/* Sizes */}
                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xs font-medium text-gray-900">Size</h3>
                                        <a
                                            href="#"
                                            className="text-xs font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                            Size guide
                                        </a>
                                    </div>

                                    <fieldset aria-label="Choose a size" className="mt-4">
                                        <RadioGroup
                                            value={selectedSize}
                                            onChange={setSelectedSize}
                                            className="grid grid-cols-4 gap-4 sm:grid-cols-16 lg:grid-cols-8"
                                        >
                                            {product.sizes.map((size) => (
                                                <Radio
                                                    key={size.name}
                                                    value={size}
                                                    disabled={!size.inStock}
                                                    className={classNames(
                                                        size.inStock
                                                            ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                                            : "cursor-not-allowed bg-gray-50 text-gray-200",
                                                        "group relative flex items-center justify-center rounded-md border " +
                                                        "px-4 py-3 text-xs font-medium uppercase hover:bg-gray-50 focus:outline-none " +
                                                        "data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-3"
                                                    )}
                                                >
                                                    <span>{size.name}</span>
                                                    {size.inStock ? (
                                                        <span
                                                            aria-hidden="true"
                                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                                                        />
                                                    ) : (
                                                        <span
                                                            aria-hidden="true"
                                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                        >
                                                            <svg
                                                                stroke="currentColor"
                                                                viewBox="0 0 100 100"
                                                                preserveAspectRatio="none"
                                                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                            >
                                                                <line
                                                                    x1={0}
                                                                    x2={100}
                                                                    y1={100}
                                                                    y2={0}
                                                                    vectorEffect="non-scaling-stroke"
                                                                />
                                                            </svg>
                                                        </span>
                                                    )}
                                                </Radio>
                                            ))}
                                        </RadioGroup>
                                    </fieldset>
                                </div>

                                {/* Add to cart */}
                                <div className="mt-10 flex items-center gap-x-8">
                                    {/* Buy now */}
                                    <Button
                                        sx={{
                                            bgcolor: "#9155fd",
                                            color: "white",
                                            px: "2rem",
                                            py: "1rem",
                                            borderRadius: "0.5rem",
                                            height: "3rem",
                                        }}
                                        variant="contained"
                                        color="success"
                                        className="flex w-1/3 items-center justify-center rounded-md border"
                                    >
                                        Buy now
                                    </Button>

                                    {/* Add to bag */}
                                    <button
                                        type="submit"
                                        className="flex w-1/2 items-center justify-center rounded-md border
                                                 border-transparent bg-indigo-600 px-8 py-3 text-base font-medium
                                                 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2
                                                 focus:ring-indigo-500 focus:ring-offset-2"
                                        style={{ height: "3rem" }}
                                        onClick={handleAddCart}
                                    >
                                        Add to bag
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Description and details */}
                        <div
                            className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <h3 className="sr-only">Description</h3>
                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{product.description}</p>
                            </div>
                            {showFullDescription && (
                                <div>
                                    <div className="mt-10">
                                        <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                        <div className="mt-4">
                                            <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                                {product.highlights.map((highlight) => (
                                                    <li key={highlight} className="text-gray-400">
                                                        <span className="text-gray-600">{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-10">
                                        <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                        <div className="mt-4 space-y-6">
                                            <p className="text-sm text-gray-600">{product.details}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <button
                                type="button"
                                className="text-sm text-indigo-600 hover:text-indigo-500
                                hover:underline focus:outline-none mt-6"
                                onClick={toggleShowFullDescription}
                            >
                                {showFullDescription ? "Show less" : "Show more"}
                            </button>
                        </div>
                    </div>
                </section>

                {/*Reviews & Rating*/}
                <section className={"lg:px-20"}>
                    <h1 className="text-lg lg:text-xl font-semibold text-gray-900">Reviews & Rating</h1>

                    {/*Write a review & Product ratings*/}
                    <div
                        className={"border p-5 my-5"}
                        style={{ background: "#f8f1f1", borderRadius: "1rem" }}
                    >
                        <Grid container spacing={7}>
                            {/*Write a review*/}
                            <Grid item xs={7}>
                                <h1 className="text-lg lg:text-xl font-semibold text-gray-900">
                                    Write a review
                                </h1>

                                <div className="mt-5">
                                    <Rating name="read-only" value={0} precision={0.5}/>
                                </div>

                                <div className="mt-5">
                                    <textarea
                                        className="w-full h-32 border-2 border-gray-200 p-2 rounded-lg"
                                        placeholder="Write your review here..."
                                    />
                                </div>

                                <div className="mt-5">
                                    <Button
                                        sx={{
                                            bgcolor: "#9155fd",
                                            color: "white",
                                            px: "2rem",
                                            py: "1rem",
                                            borderRadius: "0.5rem",
                                            height: "3rem",
                                        }}
                                        variant="contained"
                                        color="success"
                                        className="flex w-1/3 items-center justify-center rounded-md border"
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </Grid>

                            {/*Product ratings*/}
                            <Grid item xs={5}>
                                <h1 className="text-lg lg:text-xl font-semibold text-gray-900 pb-5">
                                    Product ratings
                                </h1>

                                <div className="flex items-center space-x-3">
                                    <Rating name="read-only" value={4.6} readOnly precision={0.5}/>
                                    <p className="opacity-60">548 Ratings</p>
                                </div>

                                {ratingCategories.map((item) => (
                                    <Box className="mt-5" key={item.label}>
                                        <Grid
                                            container
                                            justifyContent={"center"}
                                            alignItems={"center"}
                                            gap={2}
                                        >
                                            <Grid item xs={3}>
                                                <p className={"text-sm"}>{item.label}</p>
                                            </Grid>

                                            <Grid item xs={7}>
                                                <LinearProgress
                                                    className="ring-emerald-950"
                                                    variant="determinate"
                                                    value={item.value}
                                                    sx={{
                                                        bgcolor: "#ebd1d1",
                                                        borderRadius: "0.5rem",
                                                        height: "0.5rem",
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                ))}
                            </Grid>
                        </Grid>
                    </div>

                    {/*Sort by: rating & Customer's comment*/}
                    <div
                        className={"border p-0 my-10"}
                        style={{ background: "#f8f5f5", borderRadius: "1rem" }}
                    >
                        {/*Sort by: rating*/}
                        <Grid container>
                            <div
                                className={"flex flex-row gap-4 px-5 py-10 w-full"}
                                color={"#9155fd"}
                                style={{
                                    background: "#ffe6e6",
                                    borderRadius: "0.5rem",
                                    border: "1px solid #f6efef",
                                }}
                            >
                                <div>
                                    <p className={"text-lg"}>4.5 above 5</p>
                                    <Rating name="read-only" value={4.5} readOnly precision={0.5}/>
                                </div>

                                <RadioGroup
                                    value={selectedStar}
                                    onChange={setSelectedStar}
                                    className="grid grid-cols-4 gap-4 sm:grid-cols-16 lg:grid-cols-8"
                                >
                                    {star.map((item) => (
                                        <Radio
                                            key={item.id}
                                            value={item}
                                            className={classNames(
                                                "cursor-pointer bg-white text-gray-800 shadow-sm",
                                                "group relative flex items-center justify-center rounded-md border " +
                                                "px-4 py-2 text-xs font-medium lowercase hover:bg-gray-50 focus:outline-none " +
                                                "data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-0"
                                            )}
                                            style={{ height: "2rem" }}
                                        >
                                            <span>{item.id}</span>
                                            <span
                                                aria-hidden="true"
                                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                                            />
                                        </Radio>
                                    ))}
                                </RadioGroup>
                            </div>
                        </Grid>

                        {/*Read all reviews*/}
                        <Grid item xs={7}>
                            <div className={"space-y-5 my-10 p-10"}>
                                {[1, 1, 1].map((item, index) => (
                                    <ProductReviewCard key={index}/>
                                ))}
                            </div>
                        </Grid>
                    </div>
                </section>

                {/*Similar products*/}
                <section className={"pt-10 lg:px-20"}>
                    <h1 className="py-5 text-xl font-bold">Similar products</h1>

                    <div className={"flex flex-row flex-wrap gap-10 justify-between"}>
                        {mens_kurta.slice(1, 10).map((item, index) => (
                            <HomeSectionCard product={item} key={index}/>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
