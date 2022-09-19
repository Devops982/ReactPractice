import "./App.css";
import React from "react";
import SideBar from "./components/Layout/SideBar/SideBar";
import Navbar from "./components/Layout/NavBarComponents/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <SideBar />
    </div>
  );
}

export default App;
