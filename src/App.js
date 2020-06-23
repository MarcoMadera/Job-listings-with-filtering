import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Contents from "./components/Contents";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Contents />
    </Fragment>
  );
};

export default App;
