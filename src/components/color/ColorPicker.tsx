import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {SketchPicker} from 'react-color';
import {EditableInput} from 'react-color/lib/components/common'
import SolidColorPicker from "./SolidColorPicker";
import LinearGradientPicker from "./LinearGradientPicker";
import {IColor, ILinearGradient, ISolidColor} from "../../store/ThumbnailContext";

const Wrapper = styled.div``

const ColorPicker: React.FC<Props> = (props) => {
    const [type, setType] = useState(props.color.type);

    let defSolid: ISolidColor = {type: 'solid', color: '#ff0000'}

    let defGradient: ILinearGradient = {
        type: 'linear',
        angle: '0deg',
        stops: [{type: 'solid', color: '#ff0000'}, {type: 'solid', color: '#ffffff'}]
    }

    if ((props.color as any).stops) {
        defSolid = (props.color as ILinearGradient).stops[0] as ISolidColor
        defGradient = props.color as ILinearGradient
    }
    if ((props.color as any).color) {
        defSolid = props.color as ISolidColor
        defGradient.stops[0] = props.color as ISolidColor
    }

    const [solid, setSolid] = useState(defSolid)
    const [gradient, setGradient] = useState(defGradient)

    useEffect(() => {
        console.log('picker',type)
        if (type === 'solid')
            props.onChange(solid)
        if (type === 'linear')
            props.onChange(gradient)
    }, [solid, gradient, type])

    return (
        <Wrapper>
            <select onChange={(e) => setType(e.target.value)}>
                <option value={'solid'}>Solid</option>
                <option value={'linear'}>Gradient</option>
            </select>
            {type === 'solid' ?
                <SolidColorPicker color={solid} onChange={c => setSolid(c)}/>
                : null}
            {type === 'linear' ?
                <LinearGradientPicker color={gradient} onChange={c => setGradient(c)}/>
                : null}
        </Wrapper>
    );
}

interface Props {
    color: IColor,
    onChange: (color: IColor) => void
}

export default ColorPicker;
