import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { Layout, Header, Nav } from "@ui";
import List from "./view/List";
import Detail from "./view/Detail";
import { ReactComponent as LogoSvg } from "@media/logo.svg";
import "@lib/media/common.css";
import ScrollSelect from "./view/ScrollSelect";
import componentsData from "./componentsData";
import styled, { keyframes } from "styled-components";

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
        <Routers />
      </Layout>
    );
  }
}

export default App;
