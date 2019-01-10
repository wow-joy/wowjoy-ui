import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { ReactComponent as NoneBase } from "../../static/medias/svg/none.svg";
import styled from "styled-components";
const Wrap = styled.div`
  display: flex;
  height: 126px;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #cccccc;
  background: #fff;
`;

const NoneIcon = styled(NoneBase)`
  width: 82px;
  height: 82px;
  margin-right: 24px;
`;
class None extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Wrap className={"wj-header-dropdown__none"}>
        <NoneIcon />
        {children}
      </Wrap>
    );
  }
}

None.propTypes = {};

export default None;
