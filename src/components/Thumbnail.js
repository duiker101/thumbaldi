import React, {Component} from 'react'
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
    top:${p => p.top};
`;

const Icon = styled.div`
    text-align:center;
    
    position:absolute;
    width:100%;
    top:${p => p.top};
`;

class Thumbnail extends Component {
    render() {
        return (
            <Wrapper background={this.props.background}>
                <Icon top={'60px'} {...this.props.icon}>
                    <FontAwesomeIcon icon={this.props.icon.name.split(' ')} {...this.props.icon}/>
                </Icon>
                <Title top={'130px'} {...this.props.title}>{this.props.title.content}</Title>
                <Title top={'220px'} {...this.props.subtitle}>{this.props.subtitle.content}</Title>
            </Wrapper>
        );
    }
}

//
//
Thumbnail.propTypes = {
    title: PropTypes.object,
    subtitle: PropTypes.object,
    icon: PropTypes.object,
    background: PropTypes.string
};

export default Thumbnail;
