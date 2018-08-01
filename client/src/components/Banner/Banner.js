import React from "react";
import Button from "../Button";
import "./Banner.css";

const Banner = props => (
    <div className={props.type}>
        <p className="logo">
            <Button path='/' label='wimb' />
        </p>
    </div>
)

export default Banner;