import zIndex from "@mui/material/styles/zIndex"
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import shadows from "@mui/material/styles/shadows"
import { Scale } from "@mui/icons-material";
import limage1 from './assets/images/bg-new.png'
function Landing() {
    return (
        <div> 
            <div style={{ justifyContent: 'center', alignItems: 'center', marginTop: 85 }}>
                <p style={{ fontSize: '26px', color: 'red', margin: 0 }}>BE OPEN</p>
                <h1 style={{ fontSize: '66px', fontWeight: 700, margin: 0 }}>We Live In the Details</h1>
                <p style={{ alignSelf: 'center', fontSize: '18px', fontWeight: 400 }}>We build high-end digital & brand solutions that help businesses grow their online presence through digital marketing.<br />
                    We believe that effective experiences can transform brands and grow businesses in the digital sphere.<br />
                    We have crafted amazing world-class user experiences for our clients across the globe.</p>
                <p style={{ fontSize: '18px', fontWeight: 400 }}>Over the past 20 years, we are giving the human touch to the digital marketing realm by joining the dots and making connections that<br />
                    enable brands to stay ahead. As much as we are immensely committed to the excellence of our work, we are equally<br />
                    committed to the value of the relationships we build. We're always aiming for a better tomorrow.</p>
            </div>
            <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', marginTop: 42 }}>

                <p style={{ fontSize: '120px', margin: 20, color: '#f5f5f5', zIndex: 0, position: 'absolute' }}>About Open</p>

                <div style={{ height: '2px', backgroundColor: 'red', width: '150px', zIndex: 20 }} />
                <p style={{ color: 'red', marginTop: '22px', zIndex: 20, marginLeft: 20, marginRight: 20 }}>OPEN SOLUTIONS</p>
                <div style={{
                    height: '2px', backgroundColor: 'red', width: '150px', zIndex: 20, }} />

            </div>
            <div style={{ flexDirection: 'row', display: 'flex', marginTop: 42, justifyContent: "space-between" }}>
                <div style={{ width: '30%', justifyContent: 'center', alignItems: 'center', marginLeft: 122, }}>
                    <p style={{ color: 'red', fontSize: '50px', textAlign: 'left', margin: 0 }}>Re-Create</p>
                    <h1 style={{ fontSize: '30px', textAlign: 'left', margin: 0 }}>Digital<span style={{ fontWeight: 400 }}> Mediums are no</span> <br /><span style={{ fontWeight: 400 }}>more a</span> luxury.</h1>
                    <p style={{ textAlign: 'left', }}>Are you positioned strong online?
                        Is your Brand Strategically placed well positioned ?</p>
                    <p style={{ textAlign: 'left' }}>It is a necessity for every business to battle its rivalries. There are a number of platforms to achieve their goals. But its important to choose what works for you. Talk to us; we might work for you.</p>
                    <Button variant="contained" disableElevation={true} sx={{
                        width: 222,
                        letterSpacing: '3px',
                        backgroundColor: 'red',
                        color: 'white',
                        borderRadius: '130px',
                        border: '5px solid red',
                        textAlign: 'left',
                        marginRight: '200px',
                        marginTop: '12px',

                        '&:hover': {
                            backgroundColor: '#3f3f3f',
                            color: '#fff',
                            borderColor: 'transparent'
                        }
                    }} > TALK TO US</Button>
                </div>
                <div style={{ width: '70%', justifyContent: 'center', alignItems: 'center', }}>
                   <img src={limage1}></img> 
                   
                </div>


            </div>

        </div >


    )
}


export default Landing