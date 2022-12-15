
import Card from "./Components/Card";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar"
import Navbars from "./Components/Navbars";
import "./App.css";
import WebDesign from "./pages/WebDesign";

function App() {
    return (
        <div className="App">
            {/*  <Navbar />
            <Navbars />
            <Hero/>
            {/* <h1 className="text-3xl font-inter text-deep-orange">Hello world!</h1>
             */}
            <WebDesign />
        </div>
    );
}

export default App;
