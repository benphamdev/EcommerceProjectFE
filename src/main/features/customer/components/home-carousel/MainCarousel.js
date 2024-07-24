import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarouselData } from "./MainCarouselData";

export const MainCarousel = () => {
    // const items = MainCarouselData.map((item) => (
    //     <div key={item.url} style={{ width: '100vw', height: '720px' }}>
    //         <img src={item.image} alt="carousel" style={{ width: '100%', height: '720px', objectFit: 'cover' }}/>
    //     </div>
    // ));

    const items = MainCarouselData.map((item) => (
        <img className="cursor-pointer" role="presentation" src={item.image} />
    ));

    return (
        <>
            <AliceCarousel items={items} autoPlay autoPlayInterval={1000} disableButtonsControls infinite />;
        </>
    );
};
