import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Property from "./Property";

const Wrapper = styled.div`
    display:grid;
    grid-template-columns: 50% 50%;
    grid-gap:.5em;
    padding-right:.5em;
    input{
        width: 60%;
    }
`

const PositionProperties: React.FC<Props> = (props) => {
    const [x, setX] = useState(props.x)
    const [y, setY] = useState(props.y)

    useEffect(() => {
        props.onChange(x, y)
    }, [x, y])

    return (
        <Wrapper>
            <Property title={'X'}>
                <input value={x} onChange={e => setX(e.target.value)}/>
            </Property>
            <Property title={'Y'}>
                <input value={y} onChange={e => setY(e.target.value)}/>
            </Property>
        </Wrapper>
    );
}

interface Props {
    x: string,
    y: string,
    onChange: (x: string, y: string) => void
}

export default PositionProperties;
