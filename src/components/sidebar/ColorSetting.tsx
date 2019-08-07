import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {IColor} from "../../store/ThumbnailContext";
import ColorPicker from "../color/ColorPicker";

const Wrapper = styled.div`
`

const ColorSetting: React.FC<IColor> = (props) => {
    const [type, setType] = useState('solid')
    const [color, setColor] = useState(props)

    // useEffect((),[color])

    return (
        <Wrapper>
            <ColorPicker color={props} onChange={c => setColor(c)}/>
        </Wrapper>
    );
}

export default ColorSetting;
