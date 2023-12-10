

import Button from '@mui/material/Button';
import bimage1 from './assets/images/RealEstate.png'
import bimage2 from './assets/images/Education.png'
import bimage3 from './assets/images/IT.png'
import bimage4 from './assets/images/HealthCare.png'
import bimage5 from './assets/images/Corporate.png'
import bimage6 from './assets/images/FMCG.png'
import bimage7 from './assets/images/Manufacturing.png'
import bimage8 from './assets/images/Retail.png'

function Body() {
    return (
        <div>
            <div style={{ flexDirection: 'row', display: 'flex' }} >
                <div style={{ width: '70%' }}>
                    <p style={{ fontSize: 64, fontWeight: 600, margin: 0, marginTop: 120, marginLeft: '122px', textAlign: 'left' }}><span style={{ color: 'red' }}>Our</span> Verticals</p>
                    <p style={{ textAlign: 'left', marginLeft: '122px', fontSize: 20 }}>
                        Open Designs has left its footprint in multiple Industries. Our 2 decades of experience<br />
                        made us understand and realize how customers behave for each industry.<br />
                        Our creativity and perspective play significantly adapting to that specific vertical.</p>
                </div>
                <div style={{ width: '30%' }}>
                    <Button variant="contained" disableElevation={true} sx={{
                        width: 200,
                        letterSpacing: '3px',
                        backgroundColor: 'red',
                        color: 'white',
                        borderRadius: '130px',
                        border: '5px solid red',
                        textAlign: 'left',
                        marginRight: '200px',
                        marginTop: '190px',

                        '&:hover': {
                            backgroundColor: '#3f3f3f',
                            color: '#fff',
                            borderColor: 'transparent'
                        }
                    }} > TALK TO US</Button>

                </div>

            </div>
            <div style={{ flexDirection: 'row', display: 'flex', marginTop: '32px', flexWrap: 'wrap', alignSelf: 'center',marginLeft:'122px' }}>
                <div style={{ width: '33.3%' }}>
                    <div style={{ flexDirection: 'row', display: 'flex', height: '320px', width: '370.3px' }}>
                        <img src={bimage1} style={{ width: '130px', height: '114px' }} ></img>
                        <div style={{ marginLeft: '22px' }} >
                            <h1 style={{ margin: 0, textAlign: 'left' }}>Real Estate</h1>
                            <p style={{ textAlign: 'left' }}>
                                Powered by imagination, centred on insights, we develop effective digital marketing strategies that deliver the brand story in an engaging format</p></div>
                    </div>
                </div>
                <div style={{ width: '33.3%' }}>
                    <div style={{ flexDirection: 'row', display: 'flex', height: '320px', width: '370.3px' }}>
                        <img src={bimage2} style={{ width: '130px', height: '114px' }} ></img>
                        <div style={{ marginLeft: '22px' }} >
                            <h1 style={{ margin: 0, textAlign: 'left' }}>Education</h1>
                            <p style={{ textAlign: 'left' }}>
                                Generating more responses from students and learners is the starting point for all academic establishments. Our solutions enable you to maximize the impact of your digital communication and help attract more learners to your academic institution.</p></div>
                    </div>
                </div>
                <div style={{ width: '33.3%' }}>
                    <div style={{ flexDirection: 'row', display: 'flex', height: '320px', width: '370.3px' }}>
                        <img src={bimage3} style={{ width: '130px', height: '114px' }} ></img>
                        <div style={{ marginLeft: '22px' }} >
                            <h1 style={{ margin: 0, textAlign: 'left' }}>Information <br />Technology</h1>
                            <p style={{ textAlign: 'left' }}>
                                Via integrated digital marketing initiatives for the IT and ITES industry, we build impactful business pages and digital strategies that increase visibility, acquire meaningful inputs and accelerate sales.</p></div>
                    </div>
                </div>
                <div style={{ width: '33.3%' }}>
                    <div style={{ flexDirection: 'row', display: 'flex', height: '320px', width: '370.3px' }}>
                        <img src={bimage4} style={{ width: '130px', height: '114px' }} ></img>
                        <div style={{ marginLeft: '22px' }} >
                            <h1 style={{ margin: 0, textAlign: 'left' }}>Health Care</h1>
                            <p style={{ textAlign: 'left' }}>
                                Our compelling healthcare communications create a reputable and dependable brand that patients trust. Via customized healthcare solutions, we build websites and brand stories that connect with patients and help generate more leads.</p></div>
                    </div>
                </div>
                <div style={{ width: '33.3%' }}>
                    <div style={{ flexDirection: 'row', display: 'flex', height: '320px', width: '370.3px' }}>
                        <img src={bimage7} style={{ width: '130px', height: '114px' }} ></img>
                        <div style={{ marginLeft: '22px' }} >
                            <h1 style={{ margin: 0, textAlign: 'left' }}>Manufacturing</h1>
                            <p style={{ textAlign: 'left' }}>
                                Including on-page and off-page SEO along with a host of SEO mechanisms specific to the manufacturing sector such as website performance optimization and rival companies research.</p></div>
                    </div>
                </div>
                <div style={{ width: '33.3%' }}>
                    <div style={{ flexDirection: 'row', display: 'flex', height: '320px', width: '370.3px' }}>
                        <img src={bimage6} style={{ width: '130px', height: '114px' }} ></img>
                        <div style={{ marginLeft: '22px' }} >
                            <h1 style={{ margin: 0, textAlign: 'left' }}>FMCG</h1>
                            <p style={{ textAlign: 'left' }}>
                                With nearly 80% of transactions being driven by online promotions, we create resonating eCommerce websites and unconventional marketing strategies that boost revenues and increase the brands market share.</p></div>
                    </div>
                </div>
                <div style={{ width: '33.3%' }}>
                    <div style={{ flexDirection: 'row', display: 'flex', height: '320px', width: '370.3px', }}>
                        <img src={bimage5} style={{ width: '130px', height: '114px' }} ></img>
                        <div style={{ marginLeft: '22px' }} >
                            <h1 style={{ margin: 0, textAlign: 'left' }}>Corporate</h1>
                            <p style={{ textAlign: 'left' }}>
                                To make your business succeed, we design, develop and maintain the most well-optimized websites and digital communications that deliver the results your brand desires and deserves.</p></div>
                    </div>
                </div>

                <div style={{ width: '33.3%' }}>
                    <div style={{ flexDirection: 'row', display: 'flex', height: '320px', width: '370.3px' }}>
                        <img src={bimage8} style={{ width: '130px', height: '114px' }} ></img>
                        <div style={{ marginLeft: '22px' }} >
                            <h1 style={{ margin: 0, textAlign: 'left' }}>Retail</h1>
                            <p style={{ textAlign: 'left' }}>
                                Via customized online experiences and innovative media platform tactics for retail, we create persuasive messages that resonate with your customers and get them to buy, love and stay loyal to your products/ services.</p></div>
                    </div>
                </div>



            </div>


        </div>
    )
}
export default Body