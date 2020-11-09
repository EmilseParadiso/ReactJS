import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button  from "react-bootstrap/Button";
import "./style.css";
const ItemCount = props => {
  const [value, setValue] = useState(props.init ? parseInt(props.init) : 0);
  return (
    <>

    <Button variant="outline-info"
        onClick={() => {
          if (value - 1 >= parseInt(props.min)) setValue(value - 1);
          console.log(value);
        }}
      >
       <h1>-</h1>
      </Button>
      
      <input className ="contador"
        disabled value={value} >
      </input>
      
      <Button variant="outline-info"
     
        onClick={() => {
          if (value + 1 <= props.max) {
            setValue(value + 1);
            props.onAdd()
            console.log(value);
          }
        }}
      >
       <h1>+</h1>
      </Button>
    </>
  );
};

export default ItemCount;
