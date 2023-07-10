import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import './product.css'

const Product = () => {
    let [product,setAllprod]= useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(res=>{console.log(res.data.products);
        setAllprod(res.data.products);
    })
        .catch(err=>console.log(err))
    },[])

  return (
    <div>
      <h1 className='text-center mt-11 mb-11'>All Products</h1>
     <Container>
            <Row>
           { product.map((prod)=> ( 
                   
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.images[0]}/>
      <Card.Body>
        <Card.Title>{prod.title}</Card.Title>
        <Card.Title>{prod.brand}</Card.Title>
        <Card.Text>
          {prod.description}
        </Card.Text>
        <Card.Title>{prod.price}</Card.Title>
      </Card.Body>
    </Card>
    ))}
    </Row>
    </Container>
    </div>
  )
}

export default Product