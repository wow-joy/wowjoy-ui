import React, { PureComponent } from "react";
import styled from "styled-components";
const Wrap = styled.div`
  border: 1px solid #eee;
  border-radius: 4px;
  width: 100%;
  float: left;
  margin: 6px 0;
`;
const Display = styled.div`
  padding: 30px 20px;
  border-bottom: 1px solid #eee;
`;
const Description = styled.div`
  padding: 16px 20px;
  font-size: 14px;
  position: relative;
  pointer-events: none;
  &::before {
    pointer-events: all;
    cursor: pointer;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 20px;
    height: 0;
    width: 0;
    border-top: 6px solid #999;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    transition: 0.3s;
    ${p =>
      p.active &&
      `
        transform: rotate(180deg)
      `};
  }
  &::after {
    pointer-events: all;
    cursor: pointer;
    color: #999;
    ${p => (!p.active ? `content: "展开代码"` : `content: "收起代码"`)};
    font-size: 12px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 32px;
    height: 12px;
    line-height: 12px;
    padding-right: 4px;
  }
`;
const Code = styled.pre`
  display: ${p => (p.visible ? "block" : "none")};
  overflow-x: scroll;
  border-top: 1px dashed #ccc;
  background: rgba(200, 200, 200, 0.1);
  padding: 10px 20px;
  font-size: 14px;
  user-select: text;
`;

class CodeDemo extends PureComponent {
  state = {
    viewCode: false
  };
  clickHandle = () => {
    this.setState({
      viewCode: !this.state.viewCode
    });
  };
  componentDidMount() {
    window.Prism.highlightAll();
  }

  render() {
    const { display, description, children, id } = this.props;
    return (
      <Wrap id={id}>
        <Display>{display}</Display>
        <Description onClick={this.clickHandle} active={this.state.viewCode}>
          {description}
        </Description>
        {
          <Code visible={this.state.viewCode}>
            <code className="language-jsx">{children}</code>
          </Code>
        }
      </Wrap>
    );
  }
}

export default CodeDemo;
