import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Dialog as DialogBase, Pop } from "wowjoy-component";
import { Btn1, Btn3 } from "../Btn";
const DialogBox = styled(DialogBase)``;
const defaultBtns = [Btn1, Btn3];
class Dialog extends PureComponent {
  closeHandle = e => {
    const { onClose } = this.props;
    onClose && onClose(e);
  };

  render() {
    const {
      className,
      defaultStyles,
      children,
      getContainer,
      autoClose,
      translate,
      visible,
      layer,
      header,
      title,
      btns,
      btnsText,
      onBtnsClick,
      showCloseBtn
    } = this.props;
    return (
      <Pop
        visible={visible}
        defaultStyles={defaultStyles}
        className={className}
        getContainer={getContainer}
        layer={layer}
        onClose={this.closeHandle}
        autoClose={autoClose}
        translate={translate}
      >
        <DialogBox
          className={"wj-dialog-box"}
          header={header}
          headerText={title}
          btns={btns || defaultBtns}
          btnsText={btnsText}
          onClick={onBtnsClick}
          onClose={this.closeHandle}
          showCloseBtn={showCloseBtn}
        >
          {children}
        </DialogBox>
      </Pop>
    );
  }
}

Dialog.propTypes = {
  className: PropTypes.string,
  defaultStyles: PropTypes.string,
  getContainer: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  autoClose: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  translate: PropTypes.string,
  visible: PropTypes.bool,
  layer: PropTypes.bool,
  header: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  title: PropTypes.string,
  btns: PropTypes.array,
  btnsText: PropTypes.array,
  onBtnsClick: PropTypes.func,
  showCloseBtn: PropTypes.bool
};
export default Dialog;
