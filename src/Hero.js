import logo from './logo.svg';
import './App.css';
import image1 from './assets/images/webdesign.png'
import Navbar from './Navbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Ourwork from './Ourwork';


function Hero() {
    const navigate = useNavigate()
    return (


        <div style={{ backgroundImage: "url(/homeopen-banner-img.jpg)", backgroundSize: "cover", width: "100vw", height: "75vh", alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontSize: 90, margin: 0, flexWrap:'wrap' }}><span style={{ fontWeight: 600, fontSize: 90 }}>#grow</span><span >your</span><span style={{ color: 'red', fontWeight: 600 }}>audience</span></p>
            <p style={{ fontSize: 25, fontWeight: 400, margin: 0 }}>we partner with brands to script new growth stories</p>
            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-around', width: '85%', alignItems: 'center', marginTop: 60 }}>
                <div style={{ height: '2px', backgroundColor: '#b7b7b7', width: '220px', }} />

                <Button variant="contained" disableElevation={true} sx={{
                    width: 280,
                    lineHeight: '45px',
                    backgroundColor: 'transparent',
                    color: 'black',
                    borderRadius: '30px',
                    border: '5px solid #3f3f3f',
                    '&:hover': {
                        backgroundColor: 'red',
                        color: '#fff',
                        borderColor: 'transparent'
                    }
                }} > Download Brochure</Button>
                <Button onClick={() => navigate('our-work')} variant="contained" disableElevation={true} sx={{
                    width: 280,
                    lineHeight: '45px',
                    backgroundColor: 'red',
                    color: 'white',
                    borderRadius: '30px',
                    border: '5px solid red',
                    '&:hover': {
                        backgroundColor: '#3f3f3f',
                        color: '#fff',
                        borderColor: 'transparent'
                    }
                }} > Our Works</Button>
                <div style={{ height: '2px', backgroundColor: '#b7b7b7', width: '220px', }} />
            </div>


        </div>
    )
}



export default Hero