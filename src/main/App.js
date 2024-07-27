import "./styles/App.css";
import Footer from "./features/customer/components/footer/Footer";
import Navigation from "./features/customer/components/navigation/Navigation";
import Product from "./features/customer/components/product/Product";

function App() {
    return (
        <div className="App">
            <div className="">
                <Navigation/>
            </div>

            <div>
                {/*<HomePage/>*/}
                <Product/>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
