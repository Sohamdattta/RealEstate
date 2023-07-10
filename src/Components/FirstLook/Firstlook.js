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
import Client from '../Home/client';
import './FirstLook.css';
import Footer from '../../Common/Footer/Footer';
import Navbtn from '../Navbtn/Navbtn';
import Buycard from '../Buy/Buycard';
import { useParams } from 'react-router-dom'
import Search from '../Searchbar/search';
import Contact from '../Contact/Contact';





function Firstlook() {
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
        <Box sx={{marginTop:"-10%"}}>
         <LargeText>Find it.Tour it.Own it</LargeText> 
          <Search/>
          </Box>
      </Box>

      <Container
        sx={{
          minWidth: "100vw",
          margin: '200px auto 10px auto',
        }}>
        <Container>

          <Navbtn/>
          
          <Contact/>
          <div className='r-head flexColStart'>
          <span className='orangeText'>Our Clients</span>
          <span className="primaryText">Reviews</span>
        </div>
          <Client/>
          <Footer/>
        </Container>

      </Container>
    </div >
  )
}

export default Firstlook;