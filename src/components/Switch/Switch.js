import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SwitchBase = styled.input`
    width: 52px;
    height: 31px;
    position: relative;
    border: 1px solid #dfdfdf;
    background-color: #fdfdfd;
    box-shadow: #dfdfdf 0 0 0 0 inset;
    border-radius: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-clip: content-box;
    display: inline-block;
    -webkit-appearance: none;
    user-select: none;
    outline: none;
    cursor: pointer;
    :before {
        content: '';
        width: 29px;
        height: 29px;
        position: absolute;
        top: 0px;
        left: 0;
        border-radius: 20px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);  
    }
    :checked {
        border-color: #06aea6;
        box-shadow: #06aea6 0 0 0 16px inset;
        background-color: #06aea6; 
    }
    :checked:before{
        left: 21px;
    }
`;

class Switch extends PureComponent {
    static defaultProps = {
        checked:false
    }
    constructor(props){
        super(props);
        this.state = {
          checked:props.checked
        }
      }
    onChange = () => {
        const { onChange} = this.props;
        const {checked} = this.state
        if(checked === false){
            this.setState({
                checked:true
            })
        }else{
            this.setState({
                checked:false
            })
        }
        return onChange && onChange(!checked);
    }
    render(){
        const {className,defaultStyles,children} = this.props;
        const {checked} = this.state
        return(
            <SwitchBase
              type='checkbox'
              defaultStyles={defaultStyles}
              className={className}
              checked={checked}
              onChange={this.onChange}
            >
            {children}
            </SwitchBase>
        )
    }
}

Switch.propTypes = {
    className: PropTypes.string,
    defaultStyles: PropTypes.string,
    children: PropTypes.node,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Switch;