import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import LogIn from "./components/LogIn";


class App extends Component {
  // _timeoutID;

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     modalToggled: false
  //   };
  //   this.toggleModal = this.toggleModal.bind(this)
  // }

  // toggleModal () {
  //   let isModalToggled = this.state.modalToggled
  //   this.setState ({
  //     modalToggled: !isModalToggled
  //   });
  // }

  render() {
    // let modalComponent = (this.state.modalToggled) ? '<LogIn />': '' 
    return (
      <Router>
        <div>
          <Navbar click={this.toggleModal} />
          <Banner type="banner"/>
          <Container class="header" />
          {/* {modalComponent} */}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
