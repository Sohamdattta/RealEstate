
import { useState,useEffect } from 'react';
import { Box } from '@mui/system';
import { styled} from "@mui/material"
import {
  MenuItem,
  TextField,
  Button,
  Container,
  Typography,
  ButtonGroup,
  useMediaQuery,
} from '@mui/material';
import axios from 'axios'
import { SearchRounded } from '@mui/icons-material';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import HouseIcon from '@mui/icons-material/House';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Client from './client';
import './Home.scss';
import Footer from '../../Common/Footer/Footer';
import Navbtn from '../Navbtn/Navbtn';
import Buycard from '../Buy/Buycard';
import { useParams } from 'react-router-dom'
import Search from '../Searchbar/search';
import Contact from '../Contact/Contact';






function Home() {
  const LargeText = styled(Typography)(({ theme }) => ({
    fontSize:"64px",
    color:"#ff9800"
    ,fontFamily:"Helvetica Neue",
    fontWeight:"400",
    [theme.breakpoints.down("md")]:{
      fontSize:"32px"
    }}));

    const SmallText = styled(Typography)(({ theme }) => ({
      fontSize:"40px",
      color:"#3f51b5",
      fontWeight:"500",
      [theme.breakpoints.down("md")]:{
        fontSize:"14px"
      }
    }));
    
  const showUP780 = useMediaQuery('(min-Width: 780px)');
  const showDown780px = useMediaQuery('(max-width: 780px)');
  

  const optionArea = '40';
  const [option, setOption] = useState('All Residentials');
 

  async function handleChange(event) {
    setOption(event.target.value);
    console.log(option)

    
  };

  return (
    <div className='hm-pg'>
      <Box
        className='homebox'>
        <Box
          sx={{
            display: 'flex',
          }}>
          
           
        </Box>
        <Box sx={{marginTop:"0%"}}>
         <LargeText>Find it.Tour it.Own it</LargeText> 
          <Search/>

        {/* <Box
          sx={{
            width: '100%',
            display: 'flex',
            height: '56px'
          }}>
          <TextField
          
            variant="filled"
            label={<SearchRounded />}
            sx={{
              alignContent: 'start',
              height: '56px',
              width: '80%',
              backgroundColor: '#ffff',
              marginTop:"15%"
            }}
            fullWidth
          />
          
          <Button
          onClick={(event)=>{setSearchTerm(event.target.value)}}
            variant='contained'
            sx={{
              borderBottomRightRadius: '20px',
              borderTopLeftRadius: '0px',
              borderBottomLeftRadius: '0px',
              width: '14%',
              height: '100%',
              border: 'none',
              margin: '0px',
              padding: 'auto 10px',
              borderTopRightRadius: '0px',
              marginTop:"15%"
            }} >
            Search
          </Button> */}
          
          
          {/* </Box> */}
          
            
          
          
        </Box>
      </Box>

      <Container
        sx={{
          minWidth: "100vw",
          margin: '200px auto 10px auto',
        }}>
        <Container>
        
          <Navbtn/>
          <Buycard/>
          <Contact/>
          
          <div className='r-head flexColStart'>
          <span className='orangeText'>Our Clients</span>
          <span className="primaryText">Reviews</span>
        </div>
          <Client/>
          <hr/>
          <Footer/>
        </Container>

      </Container>
    </div >
  )
}

export default Home;

// import React from "react";
// import houses from "../../png/4kbanner.jpg";

// import { RiSearchLine } from "react-icons/ri";

// const Hero = () => {

//   return (
//     <div className="h-[15rem] sm:h-[17rem] flex bg-red-400 overflow-hidden">
//       <div className="absolute  w-full z-20     ">
//         <div className="bg-gray-900/10 absolute z-10 w-full h-[5rem]  "></div>
//         <img
//           src={houses}
//           className="object-cover w-full  h-[25rem] sm:h-[27rem] "
//         />
//       </div>
//       <div className="relative z-30 flex flex-col items-center w-full pt-12">
//         <p className="text-white text-[32px] sm:text-[57px] font-bold">
//           To each their home.
//         </p>
//         <p className="text-white  pt-2 sm:pt-0  sm:text-[23px]  ">
//           Let's find a home that's perfect for you
//         </p>
       
//         {/* Input */}
//         <div className="relative mt-9  ">
//           <input
//             type="search"
//             className="bg-white py-4  w-[28rem] sm:w-[37rem] rounded-full pl-5 placeholder:text-gray-500 placeholder:text-[20px] outline-0 "
//             placeholder="Adress, School, City, Zip or Neighborhood"
//           />
//           <div className="absolute w-[2.7rem] h-[2.7rem] rounded-full  bg-[#e20112] top-[0.4rem] right-1 flex items-center justify-center">
//             <RiSearchLine className="text-white text-[22px]" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;