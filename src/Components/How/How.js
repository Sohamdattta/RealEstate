import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import './How.css'
 import buyIcon from "../../png/icons8-real-estate-100.png";
import sellIcon from "../../png/icons8-sell-100.png";
import rentIcon from "../../png/icons8-lease-100.png";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import CustomButton from "./CustomButton";

const How = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width:"30%",
    [theme.breakpoints.down('md')]:{
        width:"85%"
    }
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display:"flex",
    justifyContent:"space-around",
    width:"70%",
    marginTop:theme.spacing(5),
    [theme.breakpoints.down("md")]:{
        width:"100%"
    },
    [theme.breakpoints.down("sm")]:{
        flexDirection:"column",
    }
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]:{
        margin: theme.spacing(2,0,2,0),
    }
  }));

  return <>
  <Box
  sx={{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  }}
  ><div
  style={{
    width:"5%",
    height:"5px",
    backgroundColor:"white",
    margin:"0 auto"
  }}></div>
  <Typography
  variant="h3"
  sx={{ fontSize:"35px",fontWeight:"bold",color:"white",my:3}}>
    How it Works?
  </Typography>
  <CustomBox>
    <Typography
    variant="body2"
    sx={{
        fontSize:"16px",
        fontWeight:"500",
        color:"#5A6473",
        textAlign:"center"
    }}>
        What's your purpose to visit us you want to buy,rent or sell- All in one place 
    </Typography>
  </CustomBox>
  <GuidesBox>
    <GuideBox>
        <img src={buyIcon}  alt="buyIcon"/>
        <Typography
        variant="body2"
        sx={{
            fontWeight:"500",
            fontSize:"20px",
            color:"#383c45",
            my:1,
        }}>
            Buying Guides
        </Typography>
        <Box
        sx={{
            cursor:"pointer",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <Typography variant="body2" 
            sx={{ fontWeight:"bold",fontSize:"14px",color:"#0689FF"}}>
                Own it!
            </Typography>
            <ArrowRightAltIcon style={{color:"#0689FF"}}/>
        </Box>
    </GuideBox>

    <GuideBox>
        <img src={sellIcon}  alt="sellIcon"/>
        <Typography
        variant="body2"
        sx={{
            fontWeight:"500",
            fontSize:"20px",
            color:"#383c45",
            my:1,
        }}>
            Selling Guides
        </Typography>
        <Box
        sx={{
            cursor:"pointer",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <Typography variant="body2" 
            sx={{ fontWeight:"bold",fontSize:"14px",color:"#0689FF"}}>
                Sell it!
            </Typography>
            <ArrowRightAltIcon style={{color:"#0689FF"}}/>
            </Box>
    </GuideBox>

    <GuideBox>
        <img src={rentIcon}  alt="rentIcon"/>
        <Typography
        variant="body2"
        sx={{
            fontWeight:"500",
            fontSize:"20px",
            color:"#383c45",
            my:1,
        }}>
            Rental and lease Guides
        </Typography>
        <Box
        sx={{
            cursor:"pointer",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <Typography variant="body2" 
            sx={{ fontWeight:"bold",fontSize:"14px",color:"#0689FF"}}>
                Sell it!
            </Typography>
            <ArrowRightAltIcon style={{color:"#0689FF"}}/>
            </Box>
    </GuideBox>
  </GuidesBox>
  </Box>
  </>;
};

export default How;