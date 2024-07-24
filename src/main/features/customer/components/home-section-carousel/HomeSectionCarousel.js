import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../home-section-card/HomeSectionCard";

const HomeSectionCarousel = ({ data, sectionName }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: {
            items: 1,
        },
        720: {
            items: 2,
        },
        1024: {
            items: 4,
        },
    };

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item}/>);

    return (
        <div className={"border"}>
            <h2 className={"text-2xl font-semibold p-5"}>{sectionName}</h2>

            <div className={"relative p-5"}>
                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    disableDotsControls
                    disableButtonsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                    key={activeIndex}
                />

                {activeIndex < items.length - 4 && (
                    <Button
                        onClick={slideNext}
                        variant="contained"
                        className="z-50 bg-white"
                        sx={{
                            position: "absolute",
                            top: "8rem",
                            right: "0rem",
                            transform: "translateX(50%) rotate(90deg)",
                            bgcolor: "white",
                        }}
                        aria-label="next"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }}/>
                    </Button>
                )}

                {activeIndex > 0 && (
                    <Button
                        onClick={slidePrev}
                        variant="contained"
                        className="z-50 bg-white"
                        sx={{
                            position: "absolute",
                            top: "8rem",
                            left: "0rem",
                            transform: "translateX(-50%) rotate(90deg)",
                            bgcolor: "white",
                        }}
                        aria-label="prev"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)", color: "black" }}/>
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
