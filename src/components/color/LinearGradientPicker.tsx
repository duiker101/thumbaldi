import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {SketchPicker} from 'react-color';
import styled from 'styled-components'
import ColorButton from "./ColorButton";
import {IColor, ILinearGradient, ISolidColor} from "../../store/ThumbnailContext";
import SolidColorPicker from "./SolidColorPicker";

const Wrapper = styled.div`
    display:grid;
    height:24px;
    width:100px;
    grid-template-columns: 50px 50px 50px;
`

const LinearGradientPicker: React.FC<Props> = (props) => {
    const [colors, setColors] = useState(props.color.stops)
    const [rotation, setRotation] = useState(props.color.angle)

    useEffect(() => {
        props.onChange({type: 'linear', angle: rotation, stops: colors})
    }, [colors, rotation])

    return (
        <Wrapper>
            <SolidColorPicker color={colors[0] as ISolidColor} onChange={c=>setColors(prev=>{
                       return {...prev, 0: c as ISolidColor}
            })}/>
            <SolidColorPicker color={colors[1] as ISolidColor} onChange={c=>setColors(prev=>{
                return {...prev, 1: c as ISolidColor}
            })}/>
            <input
                value={rotation}
                onChange={(i) => setRotation(i.target.value)}
            />
        </Wrapper>
    );
}


interface Props {
    color: ILinearGradient,
    onChange: (color: ILinearGradient) => void
}

export default LinearGradientPicker;
