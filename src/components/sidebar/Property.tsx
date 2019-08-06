import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display:grid;
    grid-template-columns: auto 1fr;
    padding: .5em;
`

const Title = styled.div`

`

const Inputs = styled.div`
    text-align: right;
    input &:focus{
        outline: none;
    }
`

const Property: React.FC<Props> = (props) => {
    return (
        <Wrapper>
            <Title>{props.title}</Title>
            <Inputs>{props.children}</Inputs>
        </Wrapper>
    );
}

interface Props {
    title: string
}

export default Property;
