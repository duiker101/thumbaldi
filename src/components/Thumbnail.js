import React, {Component, useContext} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useThumbnail from "../ThumbnailContext";

const Wrapper = styled.div`
    // background: ${p => p.background};
    // color: ${p => p.color};
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

const Thumbnail = (props) => {

    // const [t,setT] = useContext(UserContext)
    const {getVal, changeVal} = useThumbnail();

    return (
        <Wrapper>
            <button onClick={() => changeVal('gg')}>{getVal()}</button>
            {/*<Icon top={'60px'} {...props.icon}>*/}
            {/*    <FontAwesomeIcon icon={props.icon.name.split(' ')} {...props.icon}/>*/}
            {/*</Icon>*/}
            {/*<Title top={'130px'} {...props.title}>{props.title.content}</Title>*/}
            {/*<Title top={'220px'} {...props.subtitle}>{props.subtitle.content}</Title>*/}
        </Wrapper>
    )
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
