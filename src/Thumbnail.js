import React,{Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
    background: ${p => p.background};
    color: ${p => p.color};
    width: 440px;
    height: 360px;
    
    position:relative;
`;

const Title = styled.div`
    font-size: ${p => p.size};
    color: ${p => p.color}
    text-align:center;
    
    position:absolute;
    width:100%;
    line-height:360px;
    top:0%;
    left:0%;
`;

const Icon = styled.div`
    font-size: ${p => p.size};
    color: ${p => p.color}
    text-align:center;
    
    position:absolute;
    width:100%;
    top:10%;
`;

// const Thumbnail = (props) => (
//     <Wrapper background={props.background}>
//         <Icon {...props.icon}>
//             <FontAwesomeIcon icon={props.icon.name.split(' ')}/>
//         </Icon>
//         <Title {...props.text}>{props.text.content}</Title>
//     </Wrapper>
// );
// class Thumbnail

// export default Thumbnail;

// import React, {Component} from 'react';

class Thumbnail extends Component {
    render() {
        return (
    <Wrapper background={this.props.background}>
        <Icon {...this.props.icon}>
            <FontAwesomeIcon icon={this.props.icon.name.split(' ')}/>
        </Icon>
        <Title {...this.props.text}>{this.props.text.content}</Title>
    </Wrapper>
        );
    }
}


Thumbnail.propTypes = {
    text: PropTypes.object,
    icon: PropTypes.object,
    background: PropTypes.string
};

export default Thumbnail;
