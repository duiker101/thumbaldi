import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {SketchPicker} from 'react-color';
import ColorButton from "./color/ColorButton";

const Wrapper = styled.div`
    display:grid;
    height:24px;
    width:200px;
    grid-template-columns: 1fr 50px;
`

const TextPicker = (props) => (
    <Wrapper>
        <input
            value={props.text.content}
            onChange={(i) =>
                props.onChange(Object.assign({}, props.text, {content: i.target.value}))
            }
        />

        <ColorButton color={props.text.color}>
            <SketchPicker color={props.text.color} onChangeComplete={(c) => props.onChange(Object.assign({}, props.text, {color: c.hex}))}/>
        </ColorButton>
    </Wrapper>
);

TextPicker.propTypes = {
    text: PropTypes.object,
    onChange: PropTypes.func
};

export default TextPicker;