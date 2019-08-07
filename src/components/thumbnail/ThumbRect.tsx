import React from 'react'
import styled from 'styled-components'
import {IColor, ILinearGradient, IRect, ISolidColor} from "../../store/ThumbnailContext";

const Wrapper = styled.div<any>`
    position:absolute;
    background: ${p => p.color};
    top:${p => p.y};
    left:${p => p.x};
    width:${p => p.width};
    height:${p => p.height};
`

const ThumbRect: React.FC<IRect> = (props) => {
    const getColorString = (color: IColor) => {
        if (color.type === 'solid')
            return (color as ISolidColor).color
        if (color.type === 'linear'){
            let c = color as ILinearGradient
            let stops = c.stops[0].color + ', ' + c.stops[1].color
            return `linear-gradient(${c.angle},${stops})`
        }

    }
    return (
        <Wrapper {...props} color={getColorString(props.fill)}>
        </Wrapper>
    );
}


export default ThumbRect;
