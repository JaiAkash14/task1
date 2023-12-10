import logo from './logo.svg';
import './App.css';
import image1 from './assets/images/webdesign.png'
import Navbar from './Navbar';
import Button from '@mui/material/Button';
import Hero from './Hero';
import Landing from './Landing';
import Footer from'./Footer';
import Body from './Body';
function App() {
  return (
    <div className="App" style={{height:2000}}>
      <Navbar />
    <Hero/>
   <Landing/>
<Body/>
<Footer/>
      
    </div >
  );
}

export default App;
