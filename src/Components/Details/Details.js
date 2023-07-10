import {useEffect,useState} from 'react'
import { Box, Container } from "@mui/system";
import { styled, Typography } from "@mui/material";
import { useParams } from 'react-router-dom'
import axios from 'axios'
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import './Details.scss'

const LargeText = styled(Typography)(({ theme }) => ({
    fontSize:"54px",
    color:"#000",
    fontWeight:"700",
    [theme.breakpoints.down("md")]:{
      fontSize:"32px"
    }

  }));
  const ImgContainer = styled(Box)(({ theme }) => ({
    width:"100%",
    [theme.breakpoints.down("md")]:{
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

  const SmallText = styled(Typography)(({ theme }) => ({
    fontSize:"18px",
    color:"#788087",
    fontWeight:"500",
    [theme.breakpoints.down("md")]:{
      fontSize:"14px"
    }
  }));

  const TextFlexbox = styled(Box)(({ theme }) => ({
    marginTop:theme.spacing(7),
    display:"flex",
    justifyContent:"space-between",
    padding:theme.spacing(0,5,0,5),
    [theme.breakpoints.down("sm")]:{
      flexDirection:"column",
      gap: theme.spacing(5)
    }

  }));
  const Divider = styled("div")(({ theme }) => ({
    width:"13%",
    height:"5px",
    backgroundColor:"#000339",
    [theme.breakpoints.down("md")]:{
      flexDirection:"column",
      gap: theme.spacing(5)
    }
  }));

const Details = () => {
    
    let {id}= useParams()
    let [single_prod,setsingleprod]= useState([])
    useEffect(()=>{
        axios.get(`http://localhost:1234/items/${id}`)
        .then(res=>{console.log(res.data);
            setsingleprod(res.data);
    })
        .catch(err=>console.log(err))
    },[])
  return (
    <div className='hmm-pg'>
      
      <Box
        className='homebox'>
    <Box  sx={{display: 'flex'}}>
    </Box>
    <Container>
    <Typography
          sx={{
            fontSize:"40px",
            color:"#ff9100",
            fontWeight:"700",
            my:3,
            marginTop:"50%"
          }}>Property Overview</Typography>
        
      <CustomBox>
      
        <ImgContainer>
        <img src={single_prod.image} alt="house" style={{maxWidth:"100%"}}/>
        </ImgContainer>
        <Box>
          


          <Typography
          sx={{
            fontSize:"30px",
            color:"#000339",
            fontWeight:"700",
            my:3,
            marginTop:"-10%"
          }}>
            {single_prod.bedroom} {single_prod.type} in {single_prod.address}
          </Typography>
          <Typography
           sx={{
            fontSize:"16px",
            color:"#5A6473",
            lineWeight:"27px",
            
          }}>
            {single_prod.price}<br/>
            
          </Typography>
          <Typography sx={{
            fontSize:"15px",
            color:"#212121",
            lineWeight:"35px"
          }}>Project Highlights: </Typography><br/>
          <ul>
            <li>3-sides-open south-facing flats </li>
            <li>More than 200 families have moved in.</li>
            <li>30,000 sq ft Club functional </li>

          </ul>
        </Box>
      </CustomBox>
      {/* <TextFlexbox>
        <Box sx={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center"
        }}>
          
        </Box>
      
      </TextFlexbox> */}
      
    </Container>
    
  </Box>
  
  </div>
    
);
}
    
 

export default Details


