import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import List from "./List";
import Detail from "./Detail";
import { Layout_2 as Layout } from "wowjoy-component";
import styled, { ThemeProvider } from "styled-components";
import Svg from "@svg/wowjoy_logo.svg";
import "./common.css";

const Title = styled.h1`
  text-align: center;
  color: #fff;
`;
const Logo = styled(Svg)`
  vertical-align: middle;
  width: 32px;
  height: 32px;
  path {
    fill: #fff;
  }
`;
const theme = {
  mainColor: "#06aea6",
  deepColor: "#007872",
  lightColor: "#e1f0ef",
  fontColor: "#fff",
  mainColor_hover: "#1AC3BB",
  mainColor_active: "#3E8A86",
  lightColor_hover: "#F0FFFD",
  lightColor_active: "#06AEA6"
};
const blue = {
  mainColor: "#198eeb",
  deepColor: "#0e6fbb",
  lightColor: "#e5f1fa",
  fontColor: "#fff",
  mainColor_hover: "#4fb1ff ",
  mainColor_active: "#197bc9",
  lightColor_hover: "#ecfbff",
  lightColor_active: "#d1fbff"
};
class Routers extends Component {
  render() {
    return (
      <BrowserRouter basename={`/`}>
        <ThemeProvider theme={blue}>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/detail/:name" component={Detail} />
            <Route path="/list" component={List} />
            {/* <Route
          path="/Editor"
          component={Editor}
        /> */}
            <Redirect to="/home" />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}
class Demo extends Component {
  render() {
    return <Routers />;
  }
}

render(
  <BrowserRouter>
    <Demo />
  </BrowserRouter>,
  document.querySelector("#demo")
);
