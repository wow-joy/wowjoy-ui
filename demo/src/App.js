import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { Layout as LayoutBase, Header, Nav } from "@es";
import { ScrollBox } from "wowjoy-component";
import List from "./view/List";
import Detail from "./view/Detail";
import { ReactComponent as LogoSvg } from "./media/logo.svg";
import "wowjoy-component/lib/media/common.css";
import ScrollSelect from "./view/ScrollSelect";
import componentsData from "./componentsData";
import styled, { keyframes, ThemeProvider } from "styled-components";

const Layout = styled(LayoutBase)`
  .wjc-layout-center {
    overflow: hidden;
    height: calc(100vh - 64px);
  }
`;
const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Logo = styled(LogoSvg)`
  vertical-align: middle;
  width: 32px;
  height: 32px;
  animation: ${appLogoSpin} infinite 20s linear;
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
class Routers extends Component {
  render() {
    return (
      <Switch>
        <Route path="/detail/:name" component={Detail} />
        <Route path="/list" component={List} />
        {/* <Route
        path="/Editor"
        component={Editor}
      /> */}
        <Redirect to="/list" />
      </Switch>
    );
  }
}

class App extends Component {
  state = { showLeft: true };
  toggleLeft = () => {
    this.setState({
      showLeft: !this.state.showLeft
    });
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout
          header={
            <Header onChange={this.toggleLeft}>
              <Logo className={"logo"} />
              wowjoy-ui
            </Header>
          }
          asideLeft={
            <Nav
              navList={componentsData.map((ele, index) => ({
                content: ele.name,
                id: ele.name,
                to: `/detail/${ele.name}`
              }))}
              activeId={this.props.location.pathname.replace(/\/detail\//, "")}
            />
          }
          showLeft={this.state.showLeft}
        >
          <ScrollBox style={{height: `calc(100vh - 64px)`}} dynamic>
            <Routers />
          </ScrollBox>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
