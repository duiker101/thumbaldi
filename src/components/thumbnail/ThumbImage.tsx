import React from 'react'
import styled from 'styled-components'
import {IImage} from "../../store/ThumbnailContext";

const Wrapper = styled.div<any>`
    background: url(${p => p.url});
    background-size: cover;
    position: absolute;
    top:${p => p.y};
    left:${p => p.x};
    width:${p => p.width};
    height:${p => p.height};
`

const ThumbImage: React.FC<IImage> = (props) => {
    return (
        <Wrapper {...props}>
        </Wrapper>
    );
}

interface Props {

}

export default ThumbImage;
