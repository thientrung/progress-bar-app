import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <MainContainer />
    </div>
  );
}

export default App;
