import React, { Component } from "react";
import { Tooltip } from "@es";
import styled from "styled-components";

const Cell = styled.div`
  grid-area: ${p => p.area};
`;
const Grid = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(5, 80px);
  grid-template-areas:
    ". TL Top TR ."
    "LT . . . RT"
    "Left . . . Right"
    "LB . . . RB"
    ". BL Bottom BR .";
  ${Cell} {
    width: 100%;
    text-align: center;
    padding: 0;
    align-self: center;
    justify-self: center;
    background-color: #ddd;
    padding: 5px;
    border-radius: 5px;
    box-sizing: border-box;
    font-family: sans-serif;
    cursor: pointer;
  }
`;

const grid = {
  TR: "topRight",
  Top: "top",
  TL: "topLeft",
  BR: "bottomRight",
  Bottom: "bottom",
  BL: "bottomLeft",
  LT: "leftTop",
  Left: "left",
  LB: "leftBottom",
  RT: "rightTop",
  Right: "right",
  RB: "rightBottom"
};

class Demo2 extends Component {
  render() {
    return (
      <Grid>
        {Object.keys(grid).map((s, i) => {
          return (
            <Tooltip key={i} title={"hello world"} placement={grid[s]}>
              <Cell area={s}>{s}</Cell>
            </Tooltip>
          );
        })}
      </Grid>
    );
  }
}

export default Demo2;
