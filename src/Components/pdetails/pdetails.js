import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './pdetails.css'
import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";


const ImgContainer = styled(Box)(({ theme }) => ({
  width:"250%",
  [theme.breakpoints.down("lg")]:{
    flexDirection:"column",
    textAlign:"center",
    display:"flex"
  }
}));
const CustomBox = styled(Box)(({ theme }) => ({
  display:"flex",
  gap:theme.spacing(10),
  alignItems:"center",
  [theme.breakpoints.down("md")]:{
    flexDirection:"column",
    textAlign:"center"
  }
}));

const Pdetails = () => {
    let {id}= useParams()
let [single_prod,setsingleprod]= useState([])
useEffect(()=>{
    axios.get(`http://localhost:1335/blog/${id}`)
    .then(res=>{console.log(res.data);
        setsingleprod(res.data);
})
    .catch(err=>console.log(err))
},[])
  return (  
  
    <div>
      <div className='blog'>{single_prod.item_name}</div>
      <Box  sx={{py:10}}>
<Container>
  <CustomBox>
    <ImgContainer>
    <img src={single_prod.image} alt="house" style={{maxWidth:"100%"}}/>
    </ImgContainer>
    <Box>
      
      
      <Typography
       sx={{
        fontSize:"20px",
        color:"#5A6473",
        lineWeight:"31px",
        textAlign:"Left"
      }}>
        {single_prod.text1}
      </Typography>
        <br/>
      <Typography
       sx={{
        fontSize:"16px",
        color:"#5A6473",
        lineWeight:"27px",
        
      }}>
        {single_prod.text2}
      </Typography>
      <br/>
      <Typography
       sx={{
        fontSize:"16px",
        color:"#5A6473",
        lineWeight:"27px",
        
      }}>
        {single_prod.text3}
      </Typography>
    </Box>
  </CustomBox>
  </Container>
  </Box>
    </div>


  )
}

export default Pdetails




  {/* <Typography
        sx={{
          fontSize:"40px",
          color:"#ff9100",
          fontWeight:"700",
          my:3,
          marginTop:"50%"
        }}>{single_prod.item_name}</Typography>
      
    <CustomBox>
    
      <ImgContainer>
      <img src={single_prod.image} alt="house" style={{maxWidth:"100%"}}/>
      </ImgContainer>
      <Box>
        


        
        <Typography sx={{
          fontSize:"15px",
          color:"#212121",
          lineWeight:"35px"
        }}>{single_prod.text1} </Typography><br/>

<Typography sx={{
          fontSize:"15px",
          color:"#212121",
          lineWeight:"35px"
        }}>{single_prod.text2} </Typography><br/>
         <Typography sx={{
          fontSize:"15px",
          color:"#212121",
          lineWeight:"35px"
        }}>{single_prod.text3} </Typography><br/>
        
      </Box>
    </CustomBox> */}