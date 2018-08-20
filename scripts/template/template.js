import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Wrap = styled.div`
  ${props => props.defaultStyles};
`;
class Template extends PureComponent {
  render() {
    const { className, defaultStyles, children } = this.props;
    return (
      <Wrap defaultStyles={defaultStyles} className={className}>
        {children}
      </Wrap>
    );
  }
}

Template.propTypes = {
  className: PropTypes.string,
  defaultStyles: PropTypes.string
};
export default Template;
