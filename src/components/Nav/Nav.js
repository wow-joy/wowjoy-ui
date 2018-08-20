import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { SlideDown } from "wowjoy-component";
import { PopOut } from "wowjoy-component";

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

const SubMenuSlideDown = styled(SlideDown)``;
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
    color: ${p => (p.theme && p.theme.mainColor) || "#06aea6"};
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 4px;
      height: 26px;
      background: currentColor;
    }
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
class Nav extends PureComponent {
  chooseSubMenu = type => {};
  render() {
    const { className, defaultStyles, children, navList, keyName } = this.props;
    return (
      <Wrap defaultStyles={defaultStyles} className={className}>
        {navList.map((navItem, navItemIndex) => (
          <SubMenu
            content={navItem.content}
            key={keyName + navItemIndex}
            type={navItem.subViewType}
            className="wj-nav-submenu__1"
            defaultIsActive={navItem.isActive}
          >
            {navItem.subList &&
              navItem.subList.map((subItem, subItemIndex) => (
                <SubMenu
                  type={subItem.subViewType}
                  content={subItem.content}
                  key={keyName + navItemIndex + "_" + subItemIndex}
                  className="wj-nav-submenu__2"
                >
                  {subItem.subList &&
                    subItem.subList.map((subItem_1, subItemIndex_1) => (
                      <div
                        key={
                          keyName +
                          navItemIndex +
                          "_" +
                          subItemIndex +
                          "_" +
                          subItemIndex_1
                        }
                      >
                        {subItem_1.content}
                      </div>
                    ))}
                </SubMenu>
              ))}
          </SubMenu>
        ))}
      </Wrap>
    );
  }
}

Nav.propTypes = {
  className: PropTypes.string,
  defaultStyles: PropTypes.string
};
export default Nav;
