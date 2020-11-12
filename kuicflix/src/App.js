import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import request from "./request";
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
        <Loading/>
        <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow />
        <Row title="Trending Now" fetchUrl={request.fetchTrending} />
        <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
        <Modal/>
      </div>
    );
  }
}

export default App;
