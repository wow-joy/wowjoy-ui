import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const RateBase = styled.div`

`;

class Rate extends PureComponent{
    render(){
        return(
            <RateBase>Rate组件</RateBase>
        )
    } 
}

Rate.propTypes = {
    className: PropTypes.string,
    defaultStyles: PropTypes.string,
    children: PropTypes.node,
};

export default Rate;