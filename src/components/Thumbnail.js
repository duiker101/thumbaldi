import React, {Component, useContext} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useThumbnail from "../store/ThumbnailContext";
import ThumbnailImage from "./thumbnail/ThumbnailImage";

const Wrapper = styled.div`
    //width: 440px;
    //height: 360px;
    width: 230px;
    height: 230px;
    margin:auto;
`;

const Name = styled.div`
    // font-size: ${p => p.size};
    //color: ${p => p.color};
    text-align:center;
    //position:absolute;
    //width:100%;
    //top:${p => p.top};
`;

const Thumbnail = (props) => {
    return (
        <Wrapper>
            <ThumbnailImage layers={props.layers}/>
            <Name>{props.name}</Name>
        </Wrapper>
    )
}

//
//
Thumbnail.propTypes = {
    // title: PropTypes.object,
    // subtitle: PropTypes.object,
    // icon: PropTypes.object,
    // background: PropTypes.string
};

export default Thumbnail;
