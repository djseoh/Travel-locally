import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./Navbar.css";

const Navbar = props => (
    <nav>
        <ul>
        <li><Button path= '/' label ='here' /> </li>
        <li><Button path= '/' label ='there' /> </li>
        <li><Button path= '/' label ='where' /> </li>
        <li className="right"><Button path='/' label='sign-in'/> </li>
        <li className="right"><Button  path='/' label='log-in'/> </li>
        </ul>   
    </nav>
)

export default Navbar;