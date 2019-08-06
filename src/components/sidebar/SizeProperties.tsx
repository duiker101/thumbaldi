import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Property from "./Property";

const Wrapper = styled.div`
    display:grid;
    grid-template-columns: 50% 50%;
    grid-gap:.5em;
    padding-right:.5em;
    input{
        width: 90%;
    }
`
const SizeProperties: React.FC<Props> = (props) => {
    const [w, setW] = useState(props.width)
    const [h, setH] = useState(props.height)

    useEffect(() => {
        props.onChange(w, h)
    }, [w, h])

    return (
        <Wrapper>
            <Property title={'Width'}>
                <input value={w} onChange={e => setW(e.target.value)}/>
            </Property>
            <Property title={'Height'}>
                <input value={h} onChange={e => setH(e.target.value)}/>
            </Property>
        </Wrapper>
    );
}

interface Props {
    width: string,
    height: string,
    onChange: (width: string, height: string) => void
}

export default SizeProperties;
