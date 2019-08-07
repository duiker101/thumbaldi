import React from 'react'
import styled from 'styled-components'
import ThumbText from "./ThumbText";
import ThumbRect from "./ThumbRect";
import {IImage, ILayer, IRect, IText} from "../../store/ThumbnailContext";
import ThumbImage from "./ThumbImage";

const Wrapper = styled.div`
    border:1px solid rgba(0,0,0,0.2);
    border-radius: 4px;
    width: 230px;
    height: 190px;
    margin:auto;
    
    box-shadow: 0 3px 4px rgba(0,0,0,0.2);
    position:relative;
    overflow: hidden;
`

const ThumbnailImage = (props: Props) => {
    return (
        <Wrapper>
            {props.layers.map(l => {
                    if (l.type === 'text')
                        return <ThumbText key={l.id} {...l as IText}/>
                    if (l.type === 'rect')
                        return <ThumbRect key={l.id} {...l as IRect}/>
                    if (l.type === 'image')
                        return <ThumbImage key={l.id} {...l as IImage}/>
                }
            )}
        </Wrapper>
    );
}

interface Props {
    layers: ILayer[]
}

export default ThumbnailImage;
