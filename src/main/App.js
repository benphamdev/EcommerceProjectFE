import "./styles/App.css";
import Footer from "./features/customer/components/footer/Footer";
import Navigation from "./features/customer/components/navigation/Navigation";
import HomePage from "./features/customer/pages/HomePage";

function App() {
    return (
        <div className="App">
            <div className="">
                <Navigation/>
            </div>

            <div>
                <HomePage/>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
