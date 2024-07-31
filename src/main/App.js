import Footer from "./features/customer/components/footer/Footer";
import Navigation from "./features/customer/components/navigation/Navigation";
import { OrderDetail } from "./features/customer/components/order/OrderDetail";
import "./styles/App.css";

function App() {
    return (
        <div className="App">
            <div className="">
                <Navigation />
            </div>

            <div>
                {/*<HomePage/>*/}
                {/*<Product />*/}
                {/*<ProductDetails/>*/}
                {/*<Cart/>*/}
                {/* <Checkout/> */}
                {/* <Order /> */}
                <OrderDetail />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
