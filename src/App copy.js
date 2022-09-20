//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Apicall from "./components/Practise/ReactClass/ApiCall";
import Greet from "./components/Practise/ReactProps/Greet";
import Welcome from "./components/Practise/ReactProps/Welcome";
import Message from "./components/Practise/ReactProps/Message";
import Counter from "./components/Practise/ReactClass/Counter";
import ResponsiveAppBar from "./components/Layout/Notused/Header";
import TemporaryDrawer from "./components/Layout/SideBar/SideBarLayout";
import ClassClicks from "./components/Practise/ReactClass/ClassClicks";
import NameList from "./components/Practise/ReactProps/NameList";
import SideBar from "./components/Layout/SideBar/SideBarLayout";
import EnhancedTable from "./components/Layout/Table";
import ChartApp from "./components/Practise/ReactCharts/Chart";
import PrimarySearchAppBar from "./components/Layout/NavBarComponents/Navbar";
import ExchangeRate from "./components/Api/ExchangeRate";
import HookCounter from "./components/Practise/ReactHooks/UseState/HookCounter";
import UseState from "./components/Practise/ReactHooks/UseState/UseState";
import UseEffect from "./components/Practise/ReactHooks/UseEffect/UseEffect";
import UseEffectConditional from "./components/Practise/ReactHooks/UseEffect/UseEffectConditional";
import MouseCoordinates from "./components/Practise/ReactHooks/UseEffect/MouseCoordinates";
import { Timer } from "@mui/icons-material";
import TimerDependency from "./components/Practise/ReactHooks/UseEffect/TimerDependency";
import DataFetching from "./components/Practise/ReactHooks/UseEffect/DataFetching";

function App() {
  return (
    <div>
      {/* <PrimarySearchAppBar /> */}
      <ResponsiveAppBar />
      <div>
        <div className="UI">
          <div className="UI">
            <SideBar />
          </div>
          <div className="UI">
            <div>
              {/* <HookCounter />
              <EnhancedTable /> */}
            </div>
            <div>
              {/* <UseState />
              <UseEffect />
              <UseEffectConditional />
              <MouseCoordinates /> */}
              {/* <ExchangeRate /> */}
            </div>
            <div>
              {/* <ChartApp />
              <TimerDependency /> */}
              {/* <DataFetching /> */}
              <ExchangeRate />
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
