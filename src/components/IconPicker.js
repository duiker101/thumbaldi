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

const IconPicker = (props) => (
    <Wrapper>
        <input
            type={'text'}
            value={props.icon.name}
            onChange={(i) =>
                props.onChange(Object.assign({}, props.icon, {name: i.target.value}))
            }
        />
        <ColorButton color={props.icon.color}>
            <SketchPicker color={props.icon.color} onChangeComplete={(c) => props.onChange(Object.assign({}, props.icon, {color: c.hex}))}/>
        </ColorButton>
    </Wrapper>
);

IconPicker.propTypes = {
    onChange: PropTypes.func,
    icon: PropTypes.object
};

export default IconPicker;