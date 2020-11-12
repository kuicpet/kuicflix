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
      <div className="container-fluid">
        <Navbar/>
        <Banner/>
        <Row/>
        <Loading/>
        <Modal/>
      </div>
    );
  }
}

export default App;
