import React ,{ useState,useEffect } from 'react'
import { Box } from '@mui/system';
import { styled} from "@mui/material"
import { SearchRounded } from '@mui/icons-material';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import { Link } from 'react-router-dom';
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

// const propertyOptions = [
//   {
//     type: 'Beleghata',
//     },
//   {
//     type: 'Kankurgachi',
//     },
//   {
//     type: 'New Town',
    
//   },
//   {
//     type: 'Howrah',
//      },

// ];


const Search = () => {
  const showUP780 = useMediaQuery('(min-Width: 780px)');
  const optionArea = '60';
  const [option, setOption] = useState('');

  let handleChange=(event) =>{
    setOption(event.target.value);
    console.log(option)
  };

  let [all_prod,setAllprod]= useState([])
 
  useEffect(()=>{
      axios.get('http://localhost:1234/items')
      .then(res=>{console.log(res.data);
      setAllprod(res.data);
  })
      .catch(err=>console.log(err))
  },[])

  return (
    <>
    
    
       <TextField
            
            select
            value={option}
            onChange={handleChange}
            sx={{
              width: `${optionArea}%`,
              outline: 'none',
              height: '56px',
              padding: 'auto',
              backgroundColor: '#ffff',
              borderBottomLeftRadius: '20px',
              borderBottomRightRadius: '20px',
            }} >
      {all_prod.map((option) => {
              return (

                  <Link to={`details/${option.id}`} >
                <MenuItem key={option.id} value={option.id}>
                  {showUP780 &&
                    <Typography>
                      {option.address}
                    </Typography>}
                  
                </MenuItem>
                      </Link>
                )
                
              })}
               
              </TextField>
               
              
         <Box
          sx={{
            width: '100%',
            display: 'flex',
            height: '56px'
          }}>
                
     </Box>
     </>
  )
}

export default Search

