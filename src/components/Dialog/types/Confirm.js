import React from "react";
import { Btn2 as Type2 } from "../../Btn";
import styled from "styled-components";
import Dialog from "../Dialog";
import Pointer from "../../../components/icons/waring_line";
import Question from "../../../components/icons/question_line";
import Success from "../../../components/icons/done_line";
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
  `,
};
class Confirm extends React.PureComponent {
  render() {
    const {
      defaultStyles,
      children,
      description,
      icon,
      type = "pointer",
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
