import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./Navbar.css";

  
const Navbar = (props) =>(
    <nav>
        <ul>
        <li className='navbuttons'><Button path= '/' label ='here' /> </li>
        <li className='navbuttons'><Button path= '/' label ='there' /> </li>
        <li className='navbuttons'><Button path= '/' label ='where' /> </li>
        <li className="right navbuttons"><Button path='/' label='sign-in'/> </li>
        <li className="right navbuttons"><Button onClick={props.click} label='log-in'/> </li>
        </ul>   
    </nav>
)

export default Navbar;