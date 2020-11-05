import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";


const imagen = (props) => {
  return ( 
  <Navbar bg = "dark" >
    <Navbar.Brand href = "#home" >
    < img src = "/PueblosOriginarios.jpg"
    width = "500"
    height = "500"
    className = "d-inline-block align-top"
    alt = "Whipala" />
     {props.children } 
    </Navbar.Brand> 
    </Navbar>

  );
}

export default imagen;