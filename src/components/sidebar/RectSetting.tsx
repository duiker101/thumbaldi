import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import useThumbnail, {IRect} from "../../store/ThumbnailContext";
import ColorSetting from "./ColorSetting";

const Wrapper = styled.div`
`

const RectSetting: React.FC<IRect> = (props) => {
    const {setLayer, getSelectedThumbnailId} = useThumbnail()
    const [color, setColor] = useState(props.fill)

    useEffect(() => {
        // setLayer(getSelectedThumbnailId(), {...props, fill: color})
    }, [color])

    return (
        <Wrapper>
            {/*<input value={color} onChange={e => setColor(e.target.value)}/>*/}

            <ColorSetting {...color}/>
        </Wrapper>
    );
}

export default RectSetting;
