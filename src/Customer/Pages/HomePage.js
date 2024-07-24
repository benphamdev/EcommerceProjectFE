import React, { PureComponent } from "react";
import { gounsPage1 } from "../../ecommerce-products-data/Gouns/gouns";
import { mens_kurta } from "../../ecommerce-products-data/Men/men_kurta";
import { sareePage1 } from "../../ecommerce-products-data/Saree/page1";
import { mensShoesPage1 } from "../../ecommerce-products-data/shoes";
import { lengha_page1 } from "../../ecommerce-products-data/Women/LenghaCholi";
import { MainCarousel } from "../Components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../Components/HomeSectionCarousel/HomeSectionCarousel";

export class HomePage extends PureComponent {
    render() {
        return <>
            <MainCarousel/>

            <div className={'space-y-10 py-10 flex flex-col justify-center px-10 lg:px-10'}>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurta"}/>
                <HomeSectionCarousel data={mensShoesPage1} sectionName={"Mens Shoe"}/>
                <HomeSectionCarousel data={sareePage1} sectionName={"Women's Saree"}/>
                <HomeSectionCarousel data={gounsPage1} sectionName={"Women's Gouns"}/>
                <HomeSectionCarousel data={lengha_page1} sectionName={"Women's Lengha"}/>
            </div>
        </>
    }
}

export default HomePage;
