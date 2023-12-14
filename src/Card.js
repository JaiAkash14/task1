import work1 from './assets/images/priya-img.jpg'

import { Typography } from '@mui/material';

function Card (props){
    return(
<div style={{height:400,width:250,backgroundColor:'grey',marginLeft:'42px',boxShadow:'5px 5px 5px',marginTop:'52px'}}>
  <div style={{width:'100%',backgroundColor:'white'}}>
<img src={props.img} ></img>
</div>
<div style={{padding:'23px 16px',backgroundColor:'white',position:'relative'}}>
<Typography style={{fontSize:'17px',color:'black',margin:'0px'}}>{props.name}</Typography>
<p style={{fontSize:'15px'}}>Responsive, Mobile website, UI Design</p>
<p style={{margin:'0px', fontSize:'14px',fontWeight:'400px'}}>VIEW THE PROJET</p>
</div>

</div>
    )
}

export default Card;