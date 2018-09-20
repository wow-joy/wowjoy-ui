import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Btn as BtnBase } from "wowjoy-component";
const Wrap = styled.div`
  ${props => props.defaultStyles};
`;
class Btn extends PureComponent {
  render() {
    const { className, defaultStyles, children, to, onClick } = this.props;
    return (
      <BtnBase
        defaultStyles={defaultStyles}
        className={className}
        to={to}
        onClick={onClick}
      >
        {children}
      </BtnBase>
    );
  }
}

Btn.propTypes = {
  className: PropTypes.string,
  defaultStyles: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  to: PropTypes.string
};
export default Btn;
