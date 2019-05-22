import React, { Component } from "react";
import styled from "styled-components";
import { ScrollBox } from "wowjoy-component";
const Wrap = styled.div`
  padding: 0 12px;
  /* height: calc(100vh - 64px);overflow-y: scroll; */
`;
class Detail extends Component {
  render() {
    const { match } = this.props;
    const name = match.params.name;
    const ComponentItem = require(`./Components/${name}`).default;

    return (
        <Wrap>
          <ComponentItem />
        </Wrap>
    );
  }
}

export default Detail;
