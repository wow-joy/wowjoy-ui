import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { SlideDown, PopOut } from "wowjoy-component";
import ControllSwitchHoc from "wowjoy-component/es/tools/Hoc/ControllSwitchHoc";
import { withRouter } from "react-router-dom";
import NavItem from "./NavItem";
const Wrap = styled.nav`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(202, 202, 202, 0.5);
  font-size: 14px;
  color: #333;
  svg {
    margin-right: 37px;
    width: 19px;
    height: 19px;
    path: {
      fill: #666;
    }
  }
  ${props => props.defaultStyles};
`;

const SubMenuSlideDown = styled(SlideDown)`
  & > div:first-child:hover {
    background: #e1f0ef;
  }
`;
const SubMenuPopOut = styled(PopOut)`
  & > div {
    background: #f8f8f8;
    color: #333;
    cursor: pointer;
    &:hover {
      background: #e1f0ef;
    }
  }
  &.active > div {
    /* color: ${p => (p.theme && p.theme.mainColor) || "#06aea6"}; */
    /* &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 4px;
      height: 26px;
      background: currentColor;
    } */
  }
  .popOut-content__pop > div {
    background: #fff;
    box-shadow: 0 1px 6px 0 rgba(153, 153, 153, 0.5);
    width: 200px;
    padding-right: 5px;
    padding-top: 2px;
    padding-bottom: 2px;
    color: #333;
  }
`;
const SubList = styled.ul`
  width: 200px;
  max-height: 300px;
  overflow-y: scroll;
  background: #fff;
  box-shadow: 0 1px 6px 0 rgba(153, 153, 153, 0.5);
`;
const SubMenu = props => {
  if (props.type === "pop") {
    return <SubMenuPopOut {...props} />;
  }
  return <SubMenuSlideDown {...props} />;
};

const getSubMenu = (list, number, clickHandle, value) => {
  return list.map((item, index) => (
    <SubMenu
      content={
        <NavItem
          data={item}
          onClick={clickHandle}
          to={item.to}
          rank={number}
          isActive={value && value === item.key}
        >
          {item.content}
        </NavItem>
      }
      key={item.key || index}
      type={item.subViewType}
      className={`wj-nav-item__${number}`}
      isActive={item.isActive}
      defaultIsActive={item.defaultIsActive}
    >
      {item.subList
        ? getSubMenu(item.subList, number + 1, clickHandle, value)
        : null}
    </SubMenu>
  ));
};
class Nav extends PureComponent {
  render() {
    const {
      className,
      defaultStyles,
      children,
      navList,
      keyName,
      value
    } = this.props;
    return (
      <Wrap defaultStyles={defaultStyles} className={className}>
        {getSubMenu(navList, 1, this.clickHandle, value)}
      </Wrap>
    );
  }
  clickHandle = (e, itemData) => {
    const { onChange } = this.props;
    onChange&&onChange(itemData.key || '',itemData)
  };
}

Nav.propTypes = {
  className: PropTypes.string,
  defaultStyles: PropTypes.string
};
export default withRouter(ControllSwitchHoc({
  value: "activeKey",
  defaultValue: "defaultActiveKey"
})(Nav));
