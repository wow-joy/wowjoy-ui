import React, { Component } from "react";
import styled from "styled-components";
const ScrollWrap = styled.aside`
  height: 100%;
  width: 100%;
  display: block;
  position: relative;
`;
const Layer = styled.div`
  position: absolute;
  height: 50%;
  background: -webkit-linear-gradient(
    ${p => {
      switch (p.position) {
        case "top":
          return `bottom`;
        case "bottom":
          return `top`;
        case "left":
          return `right`;
        case "right":
          return `left`;
        default:
          return `bottom`;
      }
    }},
    rgba(255, 255, 255, 0) 1%,
    rgba(255, 255, 255, 0.7) 6%,
    rgba(255, 255, 255, 0.9)
  );
  /* background: rgba(255, 255, 255, 0.6); */
  top: 0;
  left: 0;
  right: 10px;
  bottom: 0;
  pointer-events: none;
  ${p => {
    switch (p.position) {
      case "top":
        return `bottom: auto`;
      case "bottom":
        return `top: auto`;
      case "left":
        return `right: auto`;
      case "right":
        return `left: auto`;
      default:
        return `bottom: auto`;
    }
  }};
`;
const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: scroll;
  /* &::before{
    content: '';
    width: 100%;
    height: 50%;
    display: block;
    flex-shrink: 0;
  } 
   &::after{
    content: '';
    width: 100%;
    height: 50%;
    display: block;
    flex-shrink: 0;
  } */
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #fafafa;
    cursor: pointer;
  }
  &::-webkit-scrollbar-track{
    /* display:none; */
    box-shadow:inset 0 0 4px rgba(55,55,55,0.3);
    border-radius:4px;
    background-color:#fafafa;
    cursor: pointer;
  };
  &::-webkit-scrollbar-thumb{
    border-radius:4px;
    -webkit-box-shadow:inset 0 0 3px rgba(55,55,55,0.2);
    background-color:rgba(99, 99, 99 ,0.1);
    cursor: pointer;
  };
  &:hover{
    &::-webkit-scrollbar-thumb{
    background-color:rgba(99, 99, 99 ,0.2);
  };
  }
  /* transform: ${p => `translate(0, ${50 - 100 * p.activeIndex}%)`}; */
`;
class ScrollSelect extends Component {
  render() {
    return (
      <ScrollWrap className={this.props.className}>
        {/* <Layer position={"top"} /> */}
        <Content activeIndex={this.props.activeIndex}>
          {this.props.children}
        </Content>
        {/* <Layer position={"bottom"} /> */}
      </ScrollWrap>
    );
  }
}

export default ScrollSelect;
