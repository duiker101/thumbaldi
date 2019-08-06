import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
`

const TextLayerSetting = (props: Props) => {
    return (
        <Wrapper>
            {props.text}
        </Wrapper>
    );
}

interface Props {
    // text:
}

export default TextLayerSetting;
