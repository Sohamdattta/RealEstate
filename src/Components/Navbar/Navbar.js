import { useNavigate } from 'react-router-dom'
import React, { useState,useRef } from "react";
import "./Navbar.css";
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Home from "../Home/Home";
import Footer from "../../Common/Footer/Footer";
import {BiMenuAltRight} from 'react-icons/bi'

const Navbar = () => {
  const navigate= useNavigate();
  let logout = (event) => { window.sessionStorage.clear() 
    console.log(event);
   alert('logged out')
   navigate('/fst')
        }

let token =window.sessionStorage.getItem("token")  
 

  
  
  return(
    <section className="h-wrapper">
    <div className="flexCenter paddings innerWidth h-container">
    <Link to ="/"><h3 className='pro'>REAL ESTATE</h3></Link>
    <div className="flexCenter h-menu">
    
    {!token ?(
      <>
    <button className="button">
    <a href="signup">SignUp</a></button>
    <button className="button">
    <a href="signin">Sign In</a></button>
    </>
    ):(
      <>
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link href="#res" >Property</Nav.Link>
      <Nav.Link href="#nb">About Us</Nav.Link>
      <Nav.Link href="#cu">Contact Us</Nav.Link>
      <Nav.Link as={Link} to="pay">Blog</Nav.Link>
      <button className="button" onClick={logout}>log out</button>
      </>)}
     
    </div>
    
    
    </div>
    
    
    </section>
  )
}
export default Navbar;




