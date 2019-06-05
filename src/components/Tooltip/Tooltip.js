import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Base = styled.div`
    .tooltip{
        position: relative;
        color: #333;
        text-align: center;
        font-size: 14px;
    }
    .tooltip:hover::before {
        word-break:keep-all;
        white-space:nowrap; 
        content: '${props => props.title}';
        position: absolute;
        padding: 2px 6px;
        display: block;
        color: #fff;
        background:#06aea6;
        border: 1px solid #06aea6;
        border-radius: 5px;
        font-size: 14px;
        line-height: 20px;
    }
    .tooltip:hover::after {
        content: "";
        position: absolute;
    }
    .up:hover::before {
        top: -30px;
        left:50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
    }

    .up:hover::after {
        border-top: 5px solid #06aea6;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        top: -5px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
    }
    .down:hover::before {
        bottom: -30px;
        left:50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
    }

    .down:hover::after {
        border-bottom: 5px solid #06aea6;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        bottom: -5px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
    }
    .left:hover::before {
        top: -2px;
        left: -8px;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        transform: translateX(-100%);
    }

    .left:hover::after {
        border-left: 5px solid #06aea6;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        top: 50%;
        left:-8px;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    .right:hover::before {
        top: -2px;
        right: -8px;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        transform: translateX(100%);
    }

    .right:hover::after {
        border-right: 5px solid #06aea6;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        top: 50%;
        right:-8px;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }

`;

class Tooltip extends PureComponent{
    static defaultProps ={
        title:'',
        placement:'up'
    }
    render(){
        const {className,defaultStyles,children,title,placement} = this.props
        return(
            <Base 
            title={title}
            defaultStyles={defaultStyles}
            className={className}
            >
              <div
              className={'tooltip '+ placement}
              >
                  {children}
              </div>
            </Base>
        )
    }
}

Tooltip.propTypes= {
    className: PropTypes.string,
    defaultStyles: PropTypes.string,
    children: PropTypes.node,
    title:PropTypes.string,
    placement:PropTypes.string,
}

export default Tooltip;