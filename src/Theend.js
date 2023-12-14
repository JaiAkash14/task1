import End1 from './assets/images/world-map-point.png';
import { Button } from '@mui/material';
function Theend() {
    return (
      <div style={{flexDirection:'row',display:'flex',marginTop:'20px',}}>
    <div style={{width:'50%'}}>
        <div style={{display:'flex',}}>
          <img src={End1} style={{padding:'20px',height:'400.59px',width:'706.93px'}}></img>
        </div>
    </div>
    <div style={{width:'50%'}}>
        <div style={{backgroundColor:'red',height:'600px',width:'500px',marginLeft:160,flexDirection:'column',display:'flex',}}>
            <div style={{padding:'50px',color:'white',textAlign:'left',lineHeight:'25px'}}>
<p >OPEN COLLABORATE</p>
<h3 style={{fontSize:'34px'}}>Digital Partnership</h3>
<p style={{fontSize:'28px',}}>Lets collaborate for a better future.</p>
<p style={{}}>We are open to connecting with businesses that are ready to take up challenges and learn through what we grow through. We would love to shake hands with you in multiple ways that could bring both of us a better outcome.</p>
<Button variant="contained" disableElevation={true} sx={{
                    width: 280,
                    lineHeight: '45px',
                        backgroundColor: '#ffffff1c',
                    color: 'white',
                    borderRadius: '30px',
                    border: '1px solid white',
                    '&:hover': {
                        backgroundColor: '#3f3f3f',
                        color: '#fff',
                        borderColor: 'transparent'
                    }
                }} > Our Works</Button>
            </div>

        </div>

    </div>
   

    
      


        

   

  
  
      </div >
    );
  }
  
  export default Theend;
  