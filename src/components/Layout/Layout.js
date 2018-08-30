import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Layout as LayoutBase } from "wowjoy-component";

const Wrap = styled(LayoutBase)`
  padding-top: 64px;
  display: flex;
  width: 100%;
  background: #f4f5f6;
  & > header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 64px;
    z-index: 10;
  }
  & > aside[position="left"] {
    flex-shrink: 0;
    background: #fff;
    max-height: calc(100vh - 64px);
    transition: 0.3s;
    width: ${p => (p.leftSize === "small" ? "180px" : "230px")};
    ${p =>
      p.showLeft
        ? `margin-left: 0`
        : `margin-left:${p.leftSize === "small" ? "-180px" : "-230px"}`};
  }
  & > aside[position="right"] {
    flex-shrink: 0;
    background: #fff;
    max-height: calc(100vh - 64px);
  }
  & > article {
    flex-grow: 1;
    margin: 0 20px;
    margin-bottom: 0;
    background: #fff;
    box-shadow: 0 1px 4px 0 rgba(202, 202, 202, 0.5);
  }
`;

class Layout extends PureComponent {
  render() {
    const { children } = this.props;
    return <Wrap main={children} {...this.props} />;
  }
}

Layout.propTypes = {
  className: PropTypes.string,
  defaultStyles: PropTypes.string,
  showLeft: PropTypes.bool,
  leftSize: PropTypes.string
};
export default Layout;
