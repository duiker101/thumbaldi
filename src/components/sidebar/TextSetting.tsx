import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import useThumbnail, {IText} from "../../store/ThumbnailContext";
import PositionProperties from "./PositionProperties";
import SizeProperties from "./SizeProperties";
import Settings from "./Settings";
import Property from "./Property";
import SolidColorPicker from "../color/SolidColorPicker";


const TextSetting: React.FC<IText> = (props) => {
    const {setLayer, getSelectedThumbnailId} = useThumbnail()
    const [text, setText] = useState(props.text)
    const [align, setAlign] = useState(props.align)
    const [fontSize, setSize] = useState(props.fontSize)
    const [fontFamily, setFamily] = useState(props.fontFamily)
    const [fontWeight, setWeight] = useState(props.fontWeight)
    const [color, setColor] = useState(props.color.color)

    const [{x, y}, setXY] = useState({x: props.x, y: props.y})
    const [{width, height}, setWH] = useState({width: props.width, height: props.height})

    useEffect(() => {
        setLayer(getSelectedThumbnailId(), {
            ...props,
            text,
            width, height,
            x, y,
            align,
            fontSize, fontFamily, fontWeight,
            color: {type: 'solid', color: color}
        })
    }, [text, x, y, width, height, align, fontWeight, fontFamily, fontSize, color])

    return (
        <Settings title={'Text:' + props.text}>
            <PositionProperties x={x} y={y} onChange={(x, y) => setXY({x, y})}/>
            <SizeProperties {...{width, height}} onChange={(width, height) => setWH({width, height})}/>
            <Property title={'Text'}>
                <input value={text} onChange={e => setText(e.target.value)}/>
            </Property>
            <Property title={'Align'}>
                <input value={align} onChange={e => setAlign(e.target.value)}/>
            </Property>
            <Property title={'Font Size'}>
                <input value={fontSize} onChange={e => setSize(e.target.value)}/>
            </Property>
            <Property title={'Font Weight'}>
                <input value={fontWeight} onChange={e => setWeight(e.target.value)}/>
            </Property>
            <Property title={'Font Family'}>
                <input value={fontFamily} onChange={e => setFamily(e.target.value)}/>
            </Property>
            <Property title={'Color'}>
                <SolidColorPicker color={color} onChange={c => setColor(c)} />
            </Property>
        </Settings>
    );
}

TextSetting.defaultProps = {
    text: '',
    x: '0px',
    y: '40%',
    width: '100%',
    height: '100%',
    color: {type: 'solid', color: 'white'},
    align: 'center',
    fontSize: '2em',
    fontFamily: 'Arial',
    fontWeight: '700'
}

export default TextSetting;
