import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {SketchPicker} from 'react-color';
import {EditableInput} from 'react-color/lib/components/common'

const Wrapper = styled.div``

const ColorPickerComponent = (props) => (
    <Wrapper>
        <SketchPicker color={background} onChangeComplete={(c) => setBackground(c.hex)}/>
        <EditableInput
            style={inputStyles}
            label="hex"
            value={background}
            onChange={(c) => setBackground(c.hex)}/>
    </Wrapper>
);

ColorPickerComponent.propTypes = {
    onChange: PropTypes.func
};

export default ColorPickerComponent;