import React, { useState } from 'react';
import './client.css'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import Clientdata from "../Data/client";



export default function Client() {
    const [index, setIndex] = useState(0);
  const { name, image, review } = Clientdata[index];
  const checkNumber = (number) => {
    if (number > Clientdata.length - 1) {
      return 0;
    }
    if (number < 0) {
      return Clientdata.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='info'>{review}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      
    </article>
  );
};