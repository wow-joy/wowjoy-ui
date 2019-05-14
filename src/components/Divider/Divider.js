import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Line = styled.div`
  display:table;
  margin:16px 0;
  color:rgba(0,0,0,0.85);
  font-weight:500;
  font-size:16px;
  white-space:nowrap;
  text-align:center;
  background:transparent;
  span{
    display:inline-block;
    padding:${p => p.title?'0 10px':'0'};
    width:${p => p.title?'auto':'1px'};
  }
  :before{
    position: relative;
    top:50%;
    width:${p => {
      if(p.orientation === 'center'){
        return '50%'
      }else if(p.orientation === 'left'){
        return '5%'
      }else{
        return '95%'
      }
    }
    };
    display:table-cell;
    content:'';
    border-top:1px ${p => p.dashed===true?'dashed':'solid'} rgb(232,232,232);
    box-sizing:border-box;
    transform:translateY(50%);
  }
  :after{
    position: relative;
    top:50%;
    width:${p => {
      if(p.orientation === 'center'){
        return '50%'
      }else if(p.orientation === 'left'){
        return '95%'
      }else{
        return '5%'
      }
    }
    };
    display:table-cell;
    content:'';
    border-top:1px ${p => p.dashed===true?'dashed':'solid'} rgb(232,232,232);
    box-sizing:border-box;
    transform:translateY(50%);
  }
`;

class Divider extends PureComponent {
    static defaultProps = {
      dashed:false,
      orientation:'center',
    }
    render(){
        const {className,defaultStyles,children,dashed,orientation,title} = this.props;
        return(
            <Line
            defaultStyles={defaultStyles}
            className={className}
            dashed={dashed}
            orientation={orientation}
            title={title}
            >
            <span>{title}</span>
            </Line>
        )
    }
}

Divider.prototypes = {
    className: PropTypes.string,
    defaultStyles: PropTypes.string,
    children: PropTypes.node,
    dashed:PropTypes.bool,
    orientation:PropTypes.string,
    title:PropTypes.string
}

export default Divider