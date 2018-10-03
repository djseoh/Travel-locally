import React from "react";
import "./LogIn.css";

const LogIn = () => (
  <div className="outer-container modal" id="myModal">
    <span className="close">&times;</span>

    <div className="container">
      <div className="info-container">
        <div className="info-item log-in">
          <p>Have an account?</p>
          <div className="btn">Log In</div>
        </div>
        <div className="tree">
          <div className="leaves"></div>
          <div className="trunk"></div>
        </div>
        <div className="info-item sign-up">
          <p>Don't have an account?</p>
          <div className="btn">Sign Up</div>
        </div>
      </div>
      <div className="form-container">
        <div className="form-item">
          <form className="form-log-in animated">
            <input name="Username" placeholder="Username" type="text" />
            <input name="Password" placeholder="Password" type="Password" />
            <div className="btn">Log in</div>
          </form>
          <form className="form-sign-up animated">
            <input name="Email" placeholder="Email" type="text" />
            <input name="Username" placeholder="Username" type="text" />
            <input name="Password" placeholder="Password" type="Password" />
            <input name="CPassword" placeholder="Confirm Password" type="Password" />
            <div className="btn">Sign Up</div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default LogIn;