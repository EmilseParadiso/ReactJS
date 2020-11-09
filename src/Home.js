import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal  from "react-bootstrap/Modal";
import Button  from "react-bootstrap/Button";
import NavBar from "./NavBar/NavBar.js"
import App from "./App.js";


const Saludo =({greeting}) => {
    return <>
    <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Mensaje de los creadores de la página</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>{greeting}</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Cerrar</Button>
    <Button variant="primary">Continuar Navegando</Button>
  </Modal.Footer>
</Modal.Dialog>
    
    </>

}

const Home = () => {
    return <>
     <NavBar/>
    <Saludo greeting= "Esta página será un e-commerce de ropa para ayudar a los pueblos originarios de nuestro país."/>
    <App/>
    </>
    
}
export default Home;