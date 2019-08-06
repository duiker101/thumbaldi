import React from 'react'
import styled from 'styled-components'
import {IColor, IRect, ISolidColor} from "../../store/ThumbnailContext";

const Wrapper = styled.div`
  position:absolute;
  background: ${p => p.color};
  height: 100%;
  width: 100%;
`

const ThumbRect: React.FC<IRect> = (props) => {
    const getColorString = (color: IColor) => {
        if (color.type === 'solid')
            return (color as ISolidColor).color

    }
    return (
        <Wrapper color={getColorString(props.fill)}>
        </Wrapper>
    );
}


export default ThumbRect;
