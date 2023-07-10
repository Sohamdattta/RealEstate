import React, {useEffect,useState,useRef} from 'react'
import axios from 'axios'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import "./Buy.css"
import { sliderSettings } from './Buy'
import { orange } from '@mui/material/colors'
import { Container } from '@mui/material'
import { Link } from 'react-router-dom';
const Buycard = () => {
  
    let [all_prod,setAllprod]= useState([])
    const [searchText,setSearchTerm] = useState('')
    useEffect(()=>{
        axios.get('http://localhost:1234/items')
        .then(res=>{console.log(res.data);
        setAllprod(res.data);
    })
        .catch(err=>console.log(err))
    },[])
  return (
    <>
    
    <section id='res' className='r-Wrapper'>
      <div className='paddings innerWidth r-container'>
        <div className='r-head flexColStart'>
          <span className='orangeText'>Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
      
    
    <Swiper {...sliderSettings}>
      <SliderButtons/>
        
      
      {all_prod.map((prod)=> ( 
                   
                   <SwiperSlide key={prod.id}>
                   <div className='flexColStart r-card'>
                     <img src={prod.image} alt='home' />
                     <span className='secondaryText r-price'>
                      <span style={{color:"orange"}}>$</span>
                      <span>{prod.price}</span>
                     </span>
                     <span className='primaryText'>{prod.address}</span>
                     <span className='secondaryText'>{prod.size}</span>
                     <div className='category flex'>
                  <span style={{ background: prod.category === "For Sale" ? "#25b5791a" : "#ff98001a", color: prod.category === "For Sale" ? "#25b579" : "#ff9800" }}>{prod.category}</span>
                  <i className='fa fa-heart'></i>
                </div><Link to={`details/${prod.id}`}>
                     <button className='button'>Details</button>
                     </Link>
                   </div>
                   
                   
                 </SwiperSlide>
                 
                ))}
                
    </Swiper>
    </div>
    </section>
    </>
  )
}

export default Buycard

const SliderButtons = ()=>{
  const swiper = useSwiper();
  return(
    <div className='flexCenter r-buttons'>
      <button onClick={()=>swiper.slidePrev()}>&lt;</button>
      <button onClick={()=>swiper.slideNext()}>&gt;</button>
    </div>
  )
}