import React, { PureComponent } from "react";
import InputBase from "./Input";
import Hoc from "wowjoy-component/lib/tools/Hoc";
import Captcha from "./types/Captcha";
import Password from "./types/Password";

class Input extends PureComponent {
  get viewType() {
    return this.props.viewType;
  }
  chooseType = viewType => {
    switch (viewType) {
      case "captcha":
        return Captcha;
      case "password":
        return Password;
      case "search":
        return Password;

      default:
        return InputBase;
    }
  };

  render() {
    const Component = this.chooseType(this.viewType);
    return <Component {...this.props} />;
  }
}
export default Input;
