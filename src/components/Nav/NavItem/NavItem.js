import React, { PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const Wrap = styled.div`
  height: 50px;
  padding-left: 35px;
  display: flex;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  position: relative;

  ${p=>{
    switch(p.rank){
      case 1:
        return `
        font-weight: normal;
        height: 40px;
        padding-left: 91px;

      `
      case 2:
        return `
        font-weight: normal;
        height: 30px;
        padding-left: 31px;
      `
      ;
    }
  }}
  ${p=>p.defaultStyles}
`;
class NavItem extends PureComponent {
  render() {
    const { className, defaultStyles, children, rank} = this.props;
    return (
      <Wrap className={className} defaultStyles={defaultStyles} rank={rank}>
        {children}
      </Wrap>
    );
  }
}
NavItem.propTypes = {
  className: PropTypes.string,
  defaultStyles: PropTypes.string,
  rank: PropTypes.number,
};
export default NavItem;
