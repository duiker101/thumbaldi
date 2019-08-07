import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import useThumbnail, {IImage} from "../../store/ThumbnailContext";
import PositionProperties from "./common/PositionProperties";
import SizeProperties from "./common/SizeProperties";
import Property from "./common/Property";
import Settings from "./common/Settings";


const ImageSetting: React.FC<IImage> = (props) => {
    const {setLayer, getSelectedThumbnailId} = useThumbnail()
    const [url, setUrl] = useState(props.url)

    const [{x, y}, setXY] = useState({x: props.x, y: props.y})
    const [{width, height}, setWH] = useState({width: props.width, height: props.height})

    useEffect(() => {
        setLayer(getSelectedThumbnailId(), {
            ...props,
            url,
            width, height,
            x, y,
        })
    }, [url, x, y, width, height])

    return (
        <Settings title={'Image'}>
            <PositionProperties x={x} y={y} onChange={(x, y) => setXY({x, y})}/>
            <SizeProperties {...{width, height}} onChange={(width, height) => setWH({width, height})}/>
            <Property title={'Url'}>
                <input className={'large'} value={url} onChange={e => setUrl(e.target.value)}/>
            </Property>
        </Settings>
    );
}

ImageSetting.defaultProps = {
    url: '',
    x: '0px',
    y: '0px',
    width: '100px',
    height: '100px',
}

export default ImageSetting;
