import React from 'react'
import styled from 'styled-components'
import {IText} from "../../store/ThumbnailContext";

const Wrapper = styled.div<any>`
    position: absolute;
    top:${p => p.y};
    left:${p => p.x};
`

const ThumbText: React.FC<IText> = (props) => {
    return (
        <Wrapper x={props.x} y={props.y}>
            {props.text}
        </Wrapper>
    );
}

export default ThumbText;
