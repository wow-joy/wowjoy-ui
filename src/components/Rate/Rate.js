import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const RateOn = styled.div`
    letter-spacing: 4px;
    color: ${props => props.color};
    position: relative;
    font-family: sans-serif;
    display: inline-flex;
    line-height: 1;
    font-size: ${props => props.size};
    .rate__bg {
        position: relative;
        cursor: pointer;
    }
    .bg__realrate {
        position: absolute;
        left: 0;
        top: 0;
        width: 0;
        white-space: nowrap;
        overflow: hidden;
        cursor: pointer;
    }
`;


class Rate extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
            rateValue: 0,
            rateArray: new Array(Number(props.rateNum)).fill('')
        }
	}
	handleSelectRate (value) {
        if (!this.props.canClick) {
            return
        }
        this.setState({
            rateValue: value
        })
        this.props.handleSelectRate && this.props.handleSelectRate(value)
    }
	
	render () {
        const {rateArray, rateValue} = this.state
        const {className,defaultStyles,children,rateNum,size,color} = this.props
        return (
            <RateOn
            defaultStyles={defaultStyles}
            className={className}
            size={size} 
            color={color}
            >
                <div className="rate__bg">
                    {
                        rateArray.map((item, index) => <span onClick={() => this.handleSelectRate(index+1)} key={index}>☆</span>)
                    }
                    <div className="bg__realrate" style={{width: `calc(${rateValue ? rateValue : this.props.rateValue} / ${rateNum} * 100%)`}}>
                        {
                            rateArray.map((item, index) => <span onClick={() => this.handleSelectRate(index+1)} key={index}>★</span>)
                        }
                    </div>
                </div>
                {children}
            </RateOn>
        )
    }
}

Rate.propTypes= {
    className: PropTypes.string,
    defaultStyles: PropTypes.string,
    children: PropTypes.node,
    canClick: PropTypes.bool,
    rateNum: PropTypes.number,
    handleSelectRate: PropTypes.func,
    rateValue: PropTypes.number,
    size:PropTypes.string,
    color:PropTypes.string
}

export default Rate