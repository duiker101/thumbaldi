import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {SketchPicker} from 'react-color';
import ColorButton from "./ColorButton";

const Wrapper = styled.div`
    display:grid;
    height:24px;
    width:200px;
    grid-template-columns: 1fr 50px;
`


const SolidColorPicker = (props) => {
    return (
        <Wrapper>
            <ColorButton color={props.color}>
                <SketchPicker color={props.color} onChangeComplete={(c) => props.onChange(c.hex)}/>
            </ColorButton>
        </Wrapper>
    );
}

SolidColorPicker.propTypes = {
    color: PropTypes.string,
    onChange: PropTypes.func,

};

export default SolidColorPicker;