import React, {useState} from 'react'
import styled from 'styled-components'
import {IColor} from "../../store/ThumbnailContext";

const Wrapper = styled.div`
`

const ColorSetting: React.FC<IColor> = (props) => {
    const [type, setType] = useState('solid')
    return (
        <Wrapper>
            <select>
                <option value={'solid'} selected={type==='linear-solid'}>Solid</option>
                <option value={'gradient'} selected={type==='linear-gradient'}>Gradient</option>
            </select>

        </Wrapper>
    );
}

export default ColorSetting;
