import React, { PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
const Wrap = styled.div`
  display: block;
  height: 50px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  & > * {
    padding-left: 35px;
    display: flex;
    align-items: center;
    height: 100%;
  }
  svg{
    path{
      fill: currentColor
    }
  }
  ${
    p=>p.isActive&&`
      color: #06aea6;
      &::before{
        position: absolute;
        height:26px;
        content: '';
        display: block;
        left:0;
        top:0;
        bottom: 0;
        width:4px;
        background: currentColor;
        margin: auto;

      }
    `
  }

  ${p => {
    switch (p.rank) {
      case 2:
        return `
        font-weight: normal;
        height: 40px;
        &>*{
          padding-left: 91px;
        }
      `;
      case 3:
        return `
        font-weight: normal;
        height: 30px;
        &>*{
          padding-left: 31px;
        }
      `;
    }
  }} ${p => p.defaultStyles};
`;
class NavItem extends PureComponent {
  render() {
    const { className, defaultStyles, children, rank, data, to, isActive } = this.props;
    return (
      <Wrap
        className={className}
        defaultStyles={defaultStyles}
        rank={rank}
        onClick={this.clickHandle}
        isActive={isActive}
      >
        {children}
      </Wrap>
    );
  }
  clickHandle = e => {
    const { onClick, data} = this.props;
    if(onClick && onClick(e,data) === false){
      return 
    }
    this.linkTo(e)
  };
  linkTo = e => {
    this.props.history.push(this.props.to);
  };
}
NavItem.propTypes = {
  className: PropTypes.string,
  defaultStyles: PropTypes.string,
  rank: PropTypes.number,
  to: PropTypes.string
};
export default withRouter(NavItem);
