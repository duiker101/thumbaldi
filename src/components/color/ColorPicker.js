import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {SketchPicker} from 'react-color';
import {EditableInput} from 'react-color/lib/components/common'
import SolidColorPicker from "./SolidColorPicker";
import LinearGradientPicker from "./LinearGradientPicker";

const Wrapper = styled.div``

const ColorPicker = (props) => {
    const [type, setType] = useState('linear');
    return (
        <Wrapper>
            <select onChange={(e) => setType(e.target.value)}>
                <option value={'solid'}>Solid</option>
                <option value={'linear'}>Linear Gradient</option>
            </select>
            {type === 'solid' ?
                <SolidColorPicker color={props.color} onChange={props.onChange}/>
                : null}
            {type === 'linear' ?
                <LinearGradientPicker color={props.color} onChange={props.onChange}/>
                : null}
        </Wrapper>
    );
}

ColorPicker.propTypes = {
    color: PropTypes.string,
    onChange: PropTypes.func
};

export default ColorPicker;