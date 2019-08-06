import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import useThumbnail, {IText} from "../../store/ThumbnailContext";
import Setting from "./Setting";
import PositionProperties from "./PositionProperties";
import SizeProperties from "./SizeProperties";

const Wrapper = styled.div`
`

const TextSetting: React.FC<IText> = (props) => {
    const {setLayer, getSelectedThumbnailId} = useThumbnail()
    const [text, setText] = useState(props.text)

    const [{x, y}, setXY] = useState({x: props.x, y: props.y})
    const [{width, height}, setWH] = useState({width: props.width, height: props.height})

    useEffect(() => {
        setLayer(getSelectedThumbnailId(), {
            ...props,
            text,
            width, height,
            x, y
        })
    }, [text, x, y, width, height])

    return (
        <Wrapper>
            <PositionProperties x={x} y={y} onChange={(x, y) => setXY({x, y})}/>
            <SizeProperties {...{width, height}} onChange={(width, height) => setWH({width, height})}/>
            <Setting title={'Text'}>
                <input value={text} onChange={e => setText(e.target.value)}/>
            </Setting>
        </Wrapper>
    );
}

TextSetting.defaultProps = {
    text: '',
    x: '0px',
    y: '0px',
    width: '100%',
    height: '100%',
}

export default TextSetting;
