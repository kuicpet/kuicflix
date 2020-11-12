import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Row from "./Components/Row";
import Modal from "./Components/Modal";
import Loading from "./Components/Loading";

class App extends Component  {
  render() {
    return (
      <React.Fragment>
        <h1>kuicFlix</h1>
        <Navbar/>
        <Banner/>
        <Row/>
        <Loading/>
        <Modal/>
      </React.Fragment>
    );
  }
}

export default App;
