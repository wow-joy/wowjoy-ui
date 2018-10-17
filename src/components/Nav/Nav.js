import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { SlideDown, PopOut, ScrollBox } from "wowjoy-component";
import ControllSwitchHoc from "wowjoy-component/es/tools/Hoc/ControllSwitchHoc";
import { withRouter } from "react-router-dom";
import NavContent from "./NavContent";
const isChrome = /(Chrome|Safari)/i.test(window.navigator.userAgent) ;

const Wrap = styled.nav`
  display: flex;
  width: 230px;
  height: 100%;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(202, 202, 202, 0.5);
  font-size: 14px;
  color: #333;
  svg {
    margin-right: 28px;
    width: 19px;
    height: 19px;
    path {
      fill: #666;
    }
  }
  ${p =>
    p.size === "small" &&
    `
    width: 180px;
    svg{
      margin-right: 16px;
      width: 16px;
      height: 16px;
    }
  `} .wjc-slieDown-subContent>.active {
    & > .wjc-popOut-content,
    & > .wjc-slideDown-content {
      color: #06aea6;
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
  .childActive:not(.open):not(.active) > .wjc-popOut-content,
  .childActive:not(.open):not(.active) > .wjc-slideDown-content {
    color: #06aea6;
    &::before {
      display: none;
    }
    svg {
      path {
        fill: #06aea6;
      }
    }
  }
  ${props => props.defaultStyles};
`;

const SubMenuSlideDown = styled(SlideDown)`
  .wjc-slideDown-content:hover {
    background: #e1f0ef;
  }
  .wjc-slieDown-subContent {
    background: #f5f7f8;
  }

  &.active > .wjc-slideDown-content {
    color: #06aea6;
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
const SubMenuPopOut = styled(PopOut)`
  & > div {
    background: #f8f8f8;
    color: #333;
    cursor: pointer;
    &:hover {
      background: #e1f0ef;
    }
  }
  &.open > .wjc-popOut-content {
    color: #06aea6;
  }

  .wjc-popOut-subContent > div {
    background: #fff;
    box-shadow: 0 1px 6px 0 rgba(153, 153, 153, 0.5);
    width: 200px;
    padding-right: 5px;
    padding-top: 2px;
    padding-bottom: 2px;
    color: #333;
  }
  &.childActive > .wjc-popOut-content {
    color: #06aea6;
    &::before {
      display: none;
    }
  }
  .wj-nav-item__3 {
    color: #333;
  }
  .wj-nav-item__3.active > div:first-child {
    color: #06aea6;
    &::before {
      display: none;
    }
  }
  .wj-nav-item__3 > div > .wj-nav-item-content {
    padding-left: 31px;
    height: 30px;
    &::before {
      display: none;
    }
  }
`;

const Content = styled(NavContent)`
  ${p => {
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
const SubMenu = props => {
  if (props.type === "pop") {
    return <SubMenuPopOut {...props} />;
  }
  return (
    <SubMenuSlideDown
      onBlur={e =>
        !!document
          .querySelector(".wj-nav-item__1")
          .parentNode.contains(e.target)
      }
      {...props}
    />
  );
};

const GetSubMenu = ({
  navList = [],
  num,
  clickHandle,
  onTransitionEnd,
  onChange,
  valuePath,
  size
}) => {
  const value = valuePath[0];
  const loop = (list, number) => {
    return list.map((item, index) => (
      <SubMenu
        size={size}
        key={item.id}
        type={item.subViewType}
        className={`wj-nav-item__${number} ${
          value && value === item.id ? "active" : ""
        } ${value && valuePath.includes(item.id) ? "childActive" : ""}
        `}
        isActive={item.isOpen}
        defaultIsActive={item.defaultIsOpen}
        onTransitionEnd={onTransitionEnd}
        onChange={onChange(item.subViewType)}
        content={
          <Content
            key={item.id}
            data={item}
            onClick={item.subList ? undefined : clickHandle}
            to={item.to}
            rank={number}
            size={size}
            className={`wj-nav-item-content ${
              value && value === item.id ? "wj-nav-item-content__active" : ""
            } ${item.subList ? "hasSubList" : ""}`}
          >
            {item.content}
          </Content>
        }
      >
        {item.subList ? loop(item.subList, number + 1) : null}
      </SubMenu>
    ));
  };
  return loop(navList, num);
};

const getValuePath = (navList = [], value) => {
  const path = [];
  const loop = list => {
    for (const item of list) {
      if (item.id === value) {
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
    overflow: ""
  };

  render() {
    const {
      className,
      defaultStyles,
      children,
      size,
      navList,
      value
    } = this.props;

    const valuePath = getValuePath(navList, value);

    return (
      <Wrap defaultStyles={defaultStyles} className={className} size={size}>
        <ScrollBox
          defaultStyles={`&>div{ height: calc(100vh - 64px)} ${
            this.state.overflow === "visible"
              ? `overflow:visible; &>div{overflow: visible; &>.wjc-scroll-bar{display: none}}`
              : ""
          }`}
          maxHeight={"100%"}
          visible
          hoverControl
        >
          <GetSubMenu
            navList={navList}
            num={1}
            clickHandle={this.clickHandle}
            onChange={this.toggleSubMenu}
            onTransitionEnd={this.onTransitionEnd}
            valuePath={valuePath}
            size={size}
          />
        </ScrollBox>
      </Wrap>
    );
  }
  clickHandle = (e, itemData) => {
    const { onChange } = this.props;
    onChange && onChange(itemData.id || "", itemData);
  };
  toggleSubMenu = type => value => {
    if (type === "pop" && value) {
      this.setState({
        overflow: "visible"
      });
    } else {
      this.setState({
        overflow: "auto"
      });
    }
  };
  onTransitionEnd = (...args) => {
    if (this.props.noScroll) {
      return;
    }
    if(!isChrome){
      this.forceUpdate();
    }
  };
}

Nav.propTypes = {
  className: PropTypes.string,
  defaultStyles: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.string,
  navList: PropTypes.array,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  noScroll: PropTypes.bool
};
export default withRouter(
  ControllSwitchHoc({
    value: "activeId",
    defaultValue: "defaultActiveId"
  })(Nav)
);
