//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Apicall from "./components/Practise/ApiCall";
import Greet from "./components/Practise/Greet";
import Welcome from "./components/Practise/Welcome";
import Message from "./components/Practise/Message";
import Counter from "./components/Practise/Counter";
import ResponsiveAppBar from "./components/Layout/Header";
import TemporaryDrawer from "./components/Layout/SideBar";
import ClassClicks from "./components/Practise/ClassClicks";
import NameList from "./components/Practise/NameList";
import SideBar from "./components/Layout/SideBar";
import EnhancedTable from "./components/Layout/Table";

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <div className="UI">
        <SideBar /> <EnhancedTable />
      </div>

      {/* <NameList /> */}
      {/* <TemporaryDrawer /> */}
      <div>
        {/* <ClassClicks /> */}
        {/* <Counter />
        <Message /> */}
      </div>
      {/* <h1>Hello, World</h1>
      <p>I am writing JSX</p> */}
      {/* <Apicall /> */}
      {/* <Greet name="Parthiban" designation="Developer">
        <h1> This is Children property </h1>
      </Greet>
      <Greet name="cept">
        <button>Click Me</button>
      </Greet>
      <Greet name="Chennai" />
      <Welcome name="Parthiban" designation="Developer" /> */}
    </div>
  );
}

export default App;
