import React from "react";
import Button from "../Button";
import Search from "../Search";
import "./Banner.css";

const Banner = props => (
    <div className={props.type}>
        <p className="logo">
            <Button path='/' label='wimb' />
        </p>
        <Search />
    </div>
)

export default Banner;