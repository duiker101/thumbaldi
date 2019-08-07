import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {SketchPicker} from 'react-color';
import ColorButton from "./ColorButton";
import {ISolidColor} from "../../store/ThumbnailContext";

const Wrapper = styled.div`
    //display:grid;
    //height:24px;
    //width:200px;
    //grid-template-columns: 1fr 50px;
`


const SolidColorPicker: React.FC<Props> = (props) => {
    const decHex = (dec: number) => {
        let h = dec.toString(16)
        return h.length == 1 ? '0' + h : h
    }
    const rgbaToHex = ({r, g, b, a}): string => {
        return '#' + decHex(r) + decHex(g) + decHex(b) + decHex(Math.floor(a * 255))
    }
    const hexToRgba = (hex) => {
        let [r, g, b, a] = hex.match(/([0-9a-fA-F]{2})/g)

        return {
            r: parseInt(r, 16),
            g: parseInt(g, 16),
            b: parseInt(b, 16),
            a: parseInt(a ? a : 'ff', 16) / 255
        }

    }
    return (
        <ColorButton color={props.color.color}>
            <SketchPicker color={hexToRgba(props.color.color)}
                          onChangeComplete={(c) => props.onChange({type: 'solid', color: rgbaToHex(c.rgb)})}/>
        </ColorButton>
    );
}

interface Props {
    color: ISolidColor,
    onChange: (c: ISolidColor) => void,

};

export default SolidColorPicker;
