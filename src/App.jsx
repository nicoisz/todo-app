import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TopBar from "./components/topBar/topBar.component";
import Home from "./components/home/home.component";

function App() {
  return (
    <div>
      <TopBar></TopBar>
      <Home></Home>
    </div>
  );
}

export default App;
