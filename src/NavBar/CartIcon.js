import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col  from "react-bootstrap/Col";

import Image  from "react-bootstrap/Image";



const ImagenNavBar =() => {
  return <>
   <Navbar className="justify-content-center" bg="dark" variant="dark" >
    <Navbar.Brand href="#home">
      
       <Col xs={6} md={4}>
       <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Banner_of_the_Qulla_Suyu.svg" width="40" hight= "40" roundedCircle/>
        </Col>
        {' '}
         Whipala
    </Navbar.Brand>
  </Navbar>
</>
  
}

export default ImagenNavBar;