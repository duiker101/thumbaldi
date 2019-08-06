import React from 'react'
import styled from 'styled-components'
import {IColor, IRect, ISolidColor} from "../../store/ThumbnailContext";

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

    }
    return (
        <Wrapper {...props} color={getColorString(props.fill)}>
        </Wrapper>
    );
}


export default ThumbRect;
