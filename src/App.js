import "./App.css";
import Footer from "./Customer/Components/Footer/Footer";
import Navigation from "./Customer/Components/Navigation/Navigation";
import HomePage from "./Customer/Pages/HomePage";

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
