import React from "react";
import { Btn_2 as Type2 } from "wowjoy-component";
import styled from "styled-components";
import Dialog from "../Dialog";
import { ReactComponent as Pointer } from "../../../static/medias/svg/waring_line.svg";
import { ReactComponent as Question } from "../../../static/medias/svg/question_line.svg";
import { ReactComponent as Success } from "../../../static/medias/svg/done_line.svg";
const Title = styled.h4`
  display: flex;
  align-items: center;
  color: #333;
  height: 24px;
  line-height: 24px;
  svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;
const Description = styled.p`
  padding-left: 30px;
  font-size: 12px;
  color: #666;
  line-height: 18px;
  min-height: 12px;
`;
const Btn = styled(Type2)`
  min-width: 90px;
  height: 26px;
  line-height: 26px;
`;

const svgObj = {
  pointer: styled(Pointer)`
    path {
      fill: #fdab71;
    }
  `,
  question: styled(Question)`
    path {
      fill: #24bee8;
    }
  `,
  success: styled(Success)`
    path {
      fill: #3db39e;
    }
  `
};
class Confirm extends React.PureComponent {
  render() {
    const {
      defaultStyles,
      children,
      description,
      icon,
      type = "pointer"
    } = this.props;
    const Icon = svgObj[type];
    return (
      <Dialog
        header={false}
        btns={[Btn, Btn]}
        layer={false}
        {...this.props}
        defaultStyles={
          `
      .wj-dialog-box{
        width: 300px;
        padding-bottom: 18px;
        .wjc-dialog-content{
          padding-bottom: 12px;
        }
      }

    ` + defaultStyles
        }
      >
        <Title>
          {icon || <Icon className={"wj-confirm-icon"} />}
          {children}
        </Title>
        <Description>{description}</Description>
      </Dialog>
    );
  }
}
export default Confirm;