import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { SlideDown, ScrollBox } from "wowjoy-component";
import ControllSwitchHoc from "wowjoy-component/es/tools/Hoc/ControllSwitchHoc";
import { withRouter } from "react-router-dom";
import NavContent from "./NavContent";
import SpreadBase from "../../components/icons/spread";
import DropDownBase from "../../components/icons/drop_down";
const isChrome = /(Chrome|Safari)/i.test(window.navigator.userAgent);

const Wrap = styled.nav`
  display: flex;
  width: 230px;
  height: 100%;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(202, 202, 202, 0.5);
  font-size: 14px;
  color: #333;
  ${(p) =>
    p.size === "small" &&
    `width: 180px;
      .wj-nav-item-content>svg{
        margin-right: 16px;
        width: 16px;
        height: 16px;
      }
    `} .wj-nav-item-content__active {
    & > svg {
      path {
        fill: ${(p) => p.theme.mainColor};
      }
    }
  }

  .wjc-slieDown-subContent > .active {
    & > .wjc-slideDown-content {
      color: ${(p) => p.theme.mainColor};
      position: relative;
      &::before {
        position: absolute;
        height: 26px;
        content: "";
        display: block;
        left: 0;
        top: 0;
        bottom: 0;
        width: 4px;
        background: currentColor;
        margin: auto;
      }
    }
  }
  .childActive:not(.open):not(.active) > .wjc-slideDown-content {
    color: ${(p) => p.theme.mainColor};
    &::before {
      display: none;
    }
    svg {
      path {
        fill: ${(p) => p.theme.mainColor};
      }
    }
  }
  ${(props) => props.defaultStyles};
`;

const SubMenuSlideDown = styled(SlideDown)`
  .wjc-slideDown-content {
    color: #333;
  }
  .wjc-slideDown-content:hover {
    background: ${(p) => p.theme.lightColor};
  }
  .wjc-slieDown-subContent {
    background: #f5f7f8;
  }

  &.active > .wjc-slideDown-content {
    color: ${(p) => p.theme.mainColor};
    position: relative;
    &::before {
      position: absolute;
      height: 26px;
      content: "";
      display: block;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background: currentColor;
      margin: auto;
    }
  }
  .wj-nav-item-content {
    flex-grow: 1;
  }
  .wj-nav-item-content.hasSubList {
    flex-grow: 0;
  }
  .wj-nav-item__3 {
    color: #666;
  }
  .wj-nav-item__3 > .wjc-slideDown-content > .wj-nav-item-content {
    &::before {
      content: "";
      width: 4px;
      height: 4px;
      background: currentColor;
      border-radius: 50%;
      margin-right: 11px;
    }
  }
`;

const Content = styled(NavContent)`
  ${(p) => {
    switch (p.rank) {
      case 2:
        return `
        font-weight: normal;
        height: 40px;
        padding-left: ${p.size === "small" ? "47px" : "73px"};
      `;
      case 3:
        return `
        font-weight: normal;
        height: 40px;
        padding-left: ${p.size === "small" ? "47px" : "73px"};
      `;
      default:
        return `
        padding-left: ${p.size === "small" ? "16px" : "27px"};
        `;
    }
  }};
`;
const SubMenu = (props) => {
  return (
    <SubMenuSlideDown
      onBlur={(e) => {
        // const root = document.querySelector(".wj-nav-item__1").parentNode;
        // return root.contains(e.target) && root !== e.target;
        return false;
      }}
      {...props}
    />
  );
};
const Spread0 = styled(SpreadBase)`
  width: 8px;
  height: 8px;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%) rotate(180deg);
  &.active {
    transform: translateY(-50%) rotate(0deg);
  }
  transition: 0.3s;
  path {
    fill: #797979;
  }
`;
const Spread = React.forwardRef(({ isActive, className, ...props }, ref) => (
  <Spread0
    className={className + (isActive ? " active" : "")}
    ref={ref}
    {...props}
  />
));
const DropDown = styled(DropDownBase)`
  width: 8px;
  height: 8px;
  margin-left: 8px;
  transform: rotate(${(p) => (p.isActive ? 0 : -90)}deg);
  transition: 0.3s;
  path {
    fill: currentColor;
  }
`;

class Empty extends React.PureComponent {
  render() {
    return void 0;
  }
}

const GetSubMenu = ({
  controlIconType,
  navList = [],
  num,
  clickHandle,
  onTransitionEnd,
  onChange,
  activePath,
  size,
}) => {
  const activeId = activePath[0];
  const loop = (list, number, isFirst) => {
    return list.map((item) => (
      <SubMenu
        size={size}
        key={item.id}
        className={`wj-nav-item wj-nav-item__${number} ${
          activeId && activeId === item.id ? "active" : ""
        } ${activeId && activePath.includes(item.id) ? "childActive" : ""}`}
        isActive={item.isOpen}
        defaultIsActive={item.defaultIsOpen}
        onTransitionEnd={onTransitionEnd}
        onChange={(isActive) => onChange(isActive, item.id)}
        content={
          <Content
            key={item.id}
            data={item}
            onClick={item.subList ? undefined : clickHandle}
            to={item.to}
            rank={number}
            size={size}
            className={`wj-nav-item-content ${
              activeId && activeId === item.id
                ? "wj-nav-item-content__active"
                : ""
            } ${item.subList ? "hasSubList" : ""}`}
          >
            {item.content}
          </Content>
        }
        ControlComponent={
          controlIconType === "arrow" ? Spread : !isFirst ? DropDown : Empty
        }
      >
        {item.subList ? loop(item.subList, number + 1, false) : null}
      </SubMenu>
    ));
  };
  return loop(navList, num, true);
};

const getValuePath = (navList = [], activeId) => {
  const path = [];
  const loop = (list) => {
    for (const item of list) {
      if (item.id === activeId) {
        path.push(item.id);
        return true;
      }
      if (item.subList && loop(item.subList)) {
        path.push(item.id);
        return true;
      }
    }
  };
  loop(navList);
  return path;
};

class Nav extends PureComponent {
  state = {
    overflow: "",
  };

  render() {
    const {
      className,
      defaultStyles,
      size,
      navList,
      activeId,
      noScroll,
      controlIconType = "arrow",
    } = this.props;

    const activePath = getValuePath(navList, activeId);

    return (
      <Wrap
        defaultStyles={defaultStyles}
        className={`wj-nav-wrap ${className || ""}`}
        size={size}
      >
        <ScrollBox
          defaultStyles={`&>div{ height: calc(100vh - 64px)} `}
          dynamic={!noScroll}
        >
          <GetSubMenu
            controlIconType={controlIconType}
            navList={navList}
            num={1}
            clickHandle={this.clickHandle}
            onChange={this.toggleSubMenu}
            onTransitionEnd={this.onTransitionEnd}
            activePath={activePath}
            size={size}
          />
        </ScrollBox>
      </Wrap>
    );
  }
  clickHandle = (e, itemData) => {
    const { onChange } = this.props;
    return onChange && onChange(itemData.id || "", itemData);
  };
  toggleSubMenu = (isActive, id) => {
    this.setState({
      overflow: "auto",
    });
    const { onOpenChange } = this.props;
    onOpenChange(isActive, id);
  };
  onTransitionEnd = (...args) => {
    if (this.props.noScroll) {
      return;
    }
    this.forceUpdate();
  };
}

Nav.propTypes = {
  className: PropTypes.string,
  defaultStyles: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.string,
  navList: PropTypes.array,
  activeId: PropTypes.string,
  defaultActiveId: PropTypes.string,
  noScroll: PropTypes.bool,
  controlIconType: PropTypes.oneOf(["arrow", "delta"]),
};
export default withRouter(
  ControllSwitchHoc({
    value: "activeId",
    defaultValue: "defaultActiveId",
  })(Nav)
);
