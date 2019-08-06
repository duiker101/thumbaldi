import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display:grid;
    grid-template-columns: auto 1fr;
`

const Setting: React.FC<Props> = (props) => {
    return (
        <Wrapper>
            <div>{props.title}</div>
            <div>{props.children}</div>
        </Wrapper>
    );
}

interface Props {
    title: string
}

export default Setting;
