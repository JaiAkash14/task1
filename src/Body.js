

import Button from '@mui/material/Button';


function Body() {
    return (
        <div>
            <div style={{ backgroundColor: '#f6f6f6', height: '500px', width: '100vw', marginTop:42,flexDirection:'row',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div style={{ marginLeft:'122px',width:'60%',marginBottom:120  }}>
                    <p style={{ fontWeight: 600, fontSize: 66,margin:0,textAlign:'left' }}><span style={{ color: 'red' }}>Our</span> Verticals</p>
                    <p style={{textAlign:'left' , fontSize:20,margin:0}}>
                        Open Designs has left its footprint in multiple Industries. Our 2 decades of experience<br/>
                        made us understand and realize how customers behave for each industry.<br/>
                        Our creativity and perspective play significantly adapting to that specific vertical.</p>
                     


                </div>
                <div style={{width:'40%'}}>
                <Button variant="contained" disableElevation={true} sx={{
                        width:222,
                        letterSpacing:'3px',
                        backgroundColor: 'red', 
                        color: 'white',
                        borderRadius: '130px',
                        border: '5px solid red',
                        textAlign: 'left',
                        marginRight:'100px',
                        // marginTop:'12px',
                        marginBottom:'50px',
                        
                        '&:hover': {
                            backgroundColor: '#3f3f3f',
                            color: '#fff',
                            borderColor: 'transparent'
                        }
                    }} > TALK TO US</Button>

                </div>

            </div>



        </div>
    )
}
export default Body