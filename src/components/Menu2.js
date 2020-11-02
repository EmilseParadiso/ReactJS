import React,{Component} from 'react';

class Menu2 extends React.Component{
    render(){
      return(
        <ul>
          <li>{this.props.vestimenta} : {this.props.talle} </li>
          <li>Campera</li>
          <li>Buso</li>
          <li>Pantalon</li>
        </ul>  
      )
    }
  }
  export default Menu2;
