import "./App.css";
import Navigation from "./Customer/Components/Navigation/Navigation";
import HomePage from "./Customer/Components/Pages/HomePage";

function App() {
    return (
        <div className="App">
            <div className="">
                <Navigation />
            </div>
            <div>
                <HomePage />
            </div>
            <div>other section</div>
        </div>
    );
}

export default App;
