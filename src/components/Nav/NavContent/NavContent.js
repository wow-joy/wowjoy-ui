import React, { PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
const Wrap = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  line-height: 1;
  svg {
    vertical-align: middle;
  }
  ${p => p.defaultStyles};
`;
class NavItem extends PureComponent {
  render() {
    const { className, defaultStyles, children } = this.props;

    return (
      <Wrap
        className={className}
        defaultStyles={defaultStyles}
        onClick={this.clickHandle}
      >
        {children}
      </Wrap>
    );
  }
  clickHandle = e => {
    const { onClick, data } = this.props;
    if (onClick && onClick(e, data) === false) {
      return;
    }
    this.linkTo(e);
  };
  linkTo = e => {
    this.props.history.push(this.props.to);
  };
}
NavItem.propTypes = {
  className: PropTypes.string,
  defaultStyles: PropTypes.string,
  to: PropTypes.string
};
export default withRouter(NavItem);
