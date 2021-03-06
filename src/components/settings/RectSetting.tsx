import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import useThumbnail, {IColor, IRect} from "../../store/ThumbnailContext";
import PositionProperties from "./common/PositionProperties";
import SizeProperties from "./common/SizeProperties";
import Settings from "./common/Settings";
import ColorPicker from "../color/ColorPicker";


const RectSetting: React.FC<IRect> = (props) => {
    const {setLayer, getSelectedThumbnailId} = useThumbnail()
    const [color, setColor] = useState(props.fill)

    const [{x, y}, setXY] = useState({x: props.x, y: props.y})
    const [{width, height}, setWH] = useState({width: props.width, height: props.height})


    useEffect(() => {
        console.log(color)
        setLayer(getSelectedThumbnailId(), {
            ...props,
            fill: color,
            width, height,
            x, y
        })
    }, [color, x, y, width, height])

    return (
        <Settings title={'Rectangle'}>
            <PositionProperties x={x} y={y} onChange={(x, y) => setXY({x, y})}/>
            <SizeProperties {...{width, height}} onChange={(width, height) => setWH({width, height})}/>
            <ColorPicker color={color} onChange={c => setColor(c)}/>
        </Settings>
    );
}

RectSetting.defaultProps = {
    fill: {type: 'solid', color: '#ff0000'} as IColor,
    x: '0px',
    y: '0px',
    width: '100%',
    height: '100%',
}

export default RectSetting;
