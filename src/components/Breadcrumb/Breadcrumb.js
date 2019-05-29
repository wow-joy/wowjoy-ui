import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class Breadcrumb extends PureComponent{
    render(){
        return(
            <div>Breadcrumb组件</div>
        )
    }
}

Breadcrumb.propTypes = {
    className: PropTypes.string,
    defaultStyles: PropTypes.string,
    children: PropTypes.node
};

export default Breadcrumb;