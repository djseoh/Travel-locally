import React from "react";
import "./Button.css";

const Button = props => (
<a className ={props.class} href={props.path}>
{props.label}
</a>
);

export default Button;