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
import TemporaryDrawer from "./components/Layout/SideBar/SideBar";
import ClassClicks from "./components/Practise/ClassClicks";
import NameList from "./components/Practise/NameList";
import SideBar from "./components/Layout/SideBar/SideBar";
import EnhancedTable from "./components/Layout/Table";
import ChartApp from "./components/Practise/Chart";
import PrimarySearchAppBar from "./components/Layout/Appbar";
import ExchangeRate from "./components/Api/ExchangeRate";
import HookCounter from "./components/Practise/HookCounter";

function App() {
  return (
    <div>
      {/* <PrimarySearchAppBar /> */}
      <ResponsiveAppBar />
      <div>
        <div className="UI">
          <div>
            <SideBar />
          </div>
          <div>
            <div>
              <HookCounter />
              <EnhancedTable />
            </div>
            <div>
              <ExchangeRate />
            </div>
            <div>
              <ChartApp />
            </div>
          </div>
        </div>
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
