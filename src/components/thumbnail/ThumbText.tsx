import React from 'react'
import styled from 'styled-components'
import {IText} from "../../store/ThumbnailContext";

const Wrapper = styled.div<any>`
    position: absolute;
    top:${p => p.y};
    left:${p => p.x};
    width:${p => p.width};
    height:${p => p.height};
    text-align:${p => p.align};
    font-size:${p => p.fontSize};
    font-weight:${p => p.fontWeight};
    font-family:${p => p.fontFamily};
    color:${p => p.color ? p.color.color : 'white'}
`

const ThumbText: React.FC<IText> = (props) => {
    return (
        <Wrapper {...props}>
            {props.text}
        </Wrapper>
    );
}

export default ThumbText;
