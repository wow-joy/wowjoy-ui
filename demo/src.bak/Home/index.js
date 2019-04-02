import React, { Component } from "react";
import { Btn_1 as Btn } from "wowjoy-component";
class Home extends Component {
  render() {
    return (
      <Btn to={'/list'}>点击进入</Btn>
    );
  }
}

export default Home;
