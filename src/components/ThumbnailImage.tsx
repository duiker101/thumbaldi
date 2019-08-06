import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    background: purple;
    border:1px solid rgba(0,0,0,0.5);
    width: 230px;
    height: 190px;
    margin:auto;
    
    box-shadow: 0 3px 4px rgba(0,0,0,0.2);
`

const ThumbnailImage = (props: Props) => {
    return (
        <Wrapper>
        </Wrapper>
    );
}

interface Props {

}

export default ThumbnailImage;
