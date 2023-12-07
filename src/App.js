import logo from './logo.svg';
import './App.css';
import image1 from './assets/images/webdesign.png'
import Navbar from './Navbar';
import Button from '@mui/material/Button';
import Hero from './Hero';
import Landing from './Landing';
function App() {
  return (
    <div className="App" style={{height:2000}}>
      <Navbar />
    <Hero/>
   <Landing/>
      
    </div >
  );
}

export default App;
