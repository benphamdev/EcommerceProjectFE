import Footer from "./features/customer/components/footer/Footer";
import Navigation from "./features/customer/components/navigation/Navigation";
import "./styles/App.css";
import ProductDetails from "./features/customer/components/product-details/ProductDetails";

function App() {
    return (
        <div className="App">
            <div className="">
                <Navigation/>
            </div>

            <div>
                {/*<HomePage/>*/}
                {/*<Product />*/}
                <ProductDetails/>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
