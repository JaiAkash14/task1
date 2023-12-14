import Navbar from "./Navbar";
import Card from "./Card";
import work1 from './assets/images/priya-img.jpg'
import work2 from './assets/images/ueducate-img.jpg'
import work3 from './assets/images/smartcham-img.png'
import work4 from './assets/images/eventalex.jpg'
import work5 from './assets/images/cityscape-img.jpg'
import work6 from './assets/images/csempire-img.jpg'
import work7 from './assets/images/banusekar-img.jpg'
import work8 from './assets/images/fabto.png'
import work9 from './assets/images/connected-events.jpg'
import work10 from './assets/images/fortune-img.png'
import work11 from './assets/images/golden-homes.jpg'
import work12 from './assets/images/home-events.jpg'
import work13 from './assets/images/hpk-img.jpg'
import work14 from './assets/images/icipl.jpg'
import work15 from './assets/images/kaartech.jpg'
import work16 from './assets/images/nannilam-img.png'
import work17 from './assets/images/nawtvaj.jpg'
import work18 from './assets/images/paidhuss-img.jpg'
import work19 from './assets/images/salesrobot.jpg'
import work20 from './assets/images/rld-img.png'




function Ourwork() {
    return (
      <div style={{ margin:0}}>
        <Navbar/>
   <div style={{backgroundImage:'url(./work-banner.jpg)',height:'700px',color:'white',justifyContent:'center',alignItems:'center',display:'flex'}}>
    <p style={{fontSize:'43px',fontWeight:500}} > Impressive Imprints in every arena</p>
   </div> 
   <div style={{backgroundColor:'#edeae5',width:'100%',height:'100%'}}>
   <div style={{ justifyContent:'center',alignItems:'center',display:'flex',color:'#988f85',flexDirection:'column'}}>
    <p style={{margin:0 ,marginTop:'122px',fontWeight:'500px',fontSize:'36px'}}>Profound Mastery On Board</p>
    <p style={{fontSize:'18px',fontWeight:'400px',textAlign:'center',padding:'0px'}}>Better thoughts drives us to make something better and smarter every time! It is the functional, technical and business ideas that long term <br/>loyal association of  Reputed Brands . The services we offer, cover up an extensive range resulting in a  Diversified Portfolio .<br/>
      Our success stories will continue its never-ending legacy! </p>
      <div style={{flexDirection:'row',display:'flex',flexWrap:'wrap',justifyContent:'center',marginRight:'52px',marginLeft:'52px'}}>   
      <Card  name = {" Priya S Raman  "} img={work1}    />       
      <Card  name = {"  UEducate "} img={work2}    />    
      <Card  name = {" Smartchamps  "} img={work3}    />    
      <Card  name = {" Eventelix  "} img={work4}    />    

      <Card  name = {"  Cityscapedecors    "} img={work5}    />    
      <Card  name = {" CS empire "} img={work6}    />    
      <Card  name = {" Banusekar  "} img={work7}    />    
      <Card  name = {" Fabeato "} img={work8}    />    
      <Card  name = {" Connecting Dot "} img={work9}    />    
      <Card  name = {" Fortune Housing  "} img={work10}    /> 
      <Card  name = {" Golden Homes   "} img={work11}    />  
      <Card  name = {" Homeevents  "} img={work12}    /> 
      <Card  name = {" HPK star  "} img={work13}    />
      <Card  name = {" icipl  "} img={work14}    />      
      <Card  name = {" Kaartech  "} img={work15}    />
      <Card  name = {"   Nannilam    "} img={work16}    /> 
      <Card  name = {"  Navtoj Builders    "} img={work17}    />
      <Card  name = {" Paidhussaffron "} img={work18}    /> 
      <Card  name = {" Salez Robot  "} img={work19}    />  
      <Card  name = {" RLD  "} img={work20}    />    
       


</div>


   </div>
   </div>

  
  
      </div >
    );
  }
  
  export default Ourwork;
  