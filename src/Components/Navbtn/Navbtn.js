import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import houseCard from "../../png/houseCard.png";
import CountUp from "react-countup"
const Navbtn = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display:"flex",
    gap:theme.spacing(10),
    alignItems:"center",
    [theme.breakpoints.down("md")]:{
      flexDirection:"column",
      textAlign:"center"
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

  const LargeText = styled(Typography)(({ theme }) => ({
    fontSize:"64px",
    color:"#000",
    fontWeight:"700",
    [theme.breakpoints.down("md")]:{
      fontSize:"32px"
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

  return(
    <Box id="nb" sx={{py:10}}>
      <Container>
        <CustomBox>
          <ImgContainer>
          <img src={houseCard} alt="house" style={{maxWidth:"100%"}}/>
          </ImgContainer>
          <Box>
            <Divider/>
            <Typography
            sx={{
              fontSize:"35px",
              color:"#000339",
              fontWeight:"700",
              my:3
            }}>
              You've found a neighbourhood you love
            </Typography>
            <Typography
             sx={{
              fontSize:"16px",
              color:"#5A6473",
              lineWeight:"27px",
              
            }}>
              When you own a home , you commit to living in one location for a period of time. We are here to ensure that this will be a 
              memorable experience for you
            </Typography>
          </Box>
        </CustomBox>
        <TextFlexbox>
          <Box sx={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
          }}>
            <LargeText><CountUp start={80} end={1550} duration={100}/>+</LargeText>
            <SmallText>Home for sale</SmallText>
          </Box>
        
          <Box sx={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
          }}>
            <LargeText><CountUp start={70} end={1250} duration={100}/>+</LargeText>
            <SmallText>Rented Property</SmallText>
          </Box>
       
          <Box sx={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
          }}>
            <LargeText><CountUp start={100} end={1550} duration={100}/>+</LargeText>
            <SmallText>Homes Sold</SmallText>
          </Box>
        </TextFlexbox>
      </Container>
    </Box>

  ) 
};

export default Navbtn;