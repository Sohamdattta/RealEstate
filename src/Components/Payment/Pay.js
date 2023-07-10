import  React,{useEffect,useState} from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './Pay.css'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Blog from "../Data/Property";
import { Button, Card, Col, Row, Container } from "react-bootstrap"

const Pay = () => {
    
   
      let [all_prod,setAllprod]= useState([])
      
    useEffect(()=>{
        axios.get('http://localhost:1335/blog')
        .then(res=>{console.log(res.data);
        setAllprod(res.data);
    })
        .catch(err=>console.log(err))
    },[])
  return (
   <div>
    <div className='blog'>Blogs</div>
    
        {/* <Container>
        
        <Row xs={1} md={2} lg={3}  > */}
          {
            all_prod.map((sub) => (

              <div className="cards">
                <img className="cards__img" src={sub.image} />
                <div className="cards__overlay">
                  <div className='titleText'>{sub ? sub.item_name : ""}</div>
                  <div className="paraText">
                    {sub ? sub.brief : ""}
                    
                  </div>
                  
                  <Link to={`${sub.id}`} style={{ textDecoration: "none", color: "white" }}>
                    <button className="button">Know More</button>
                  </Link>
                </div>
              </div>


            ))
          }
        {/* </Row>
      </Container> */}

    </div>
  )
}

export default Pay

