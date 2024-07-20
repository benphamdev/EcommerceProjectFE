import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarouselData } from "./MainCarouselData";

const items = MainCarouselData.map((item) => (
    <div key={item.url}>
        <img src={item.url} alt="carousel" />
    </div>
));

export const MainCarousel = () => <AliceCarousel mouseTracking items={items} controlsStrategy="alternate" />;
