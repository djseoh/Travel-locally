import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Banner type="banner"/>
          <Container class="header" />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
