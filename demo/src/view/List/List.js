import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import componentsData from "../../componentsData";
const Item = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  &:hover {
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.1);
      opacity: 0.2;
    }
  }
`;
const ItemTitle = styled.div`
  height: 40px;
  background: #eee;
  padding: 0 20px;
  color: #333;
  line-height: 40px;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: hidden;
`;
const ItemContent = styled.div`
  font-size: 12px;
  color: #999999;
  line-height: 22px;
  padding: 18px 20px;
  background: #fff;
`;

const ListItem = props => (
  <Item>
    <ItemTitle>{props.title}</ItemTitle>
    <ItemContent>{props.children}</ItemContent>
  </Item>
);

class List extends Component {
  render() {
    return (
      <ul>
        {componentsData.map((ele, index) => (
          <li key={index}>
            <Link to={`/detail/${ele.name}`}>
              <ListItem title={ele.name}>{ele.description}</ListItem>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
