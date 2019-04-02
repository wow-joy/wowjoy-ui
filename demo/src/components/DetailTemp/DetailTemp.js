import React, { Component } from "react";
import styled from "styled-components";

const Wrap = styled.main`
  &>h1 {
    font-size: 22px;
    text-align: center;
    margin: 12px auto;
    color: #000;
  }
  h2 {
    font-size: 18px;
    margin: 10px auto;
    margin-top: 30px;
    border-left: 8px solid #06aea6;
    padding-left: 16px;
    color: #06aea6;
  }
  h3 {
    font-size: 16px;
    margin: 4px auto;
    border-left: 6px solid rgba(6, 174, 166, 0.3);
    padding-left: 20px;
  }
`;

class DetailTemp extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <Wrap>
        <h1>{title}</h1>
        {children}
      </Wrap>
    );
  }
}

export default DetailTemp;
