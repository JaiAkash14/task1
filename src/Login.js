
import Navbar from "./Navbar";
import Landing from "./Landing";
import Body from "./Body";
import Footer from "./Footer";
import Hero from "./Hero";
import './App.css';
import Theend from "./Theend";

function Login() {

    return (
        <div className="App"> 
            <Navbar />
          
            <Hero />
            <Landing />
            <Body />
            <Footer />
            <Theend/>
        </div>
    )
}

export default Login