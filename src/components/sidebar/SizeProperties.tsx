import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Setting from "./Setting";

const SizeProperties: React.FC<Props> = (props) => {
    const [w, setW] = useState(props.width)
    const [h, setH] = useState(props.height)

    useEffect(() => {
        props.onChange(w, h)
    }, [w, h])

    return (
        <>
            <Setting title={'X'}>
                <input value={w} onChange={e => setW(e.target.value)}/>
            </Setting>
            <Setting title={'Y'}>
                <input value={h} onChange={e => setH(e.target.value)}/>
            </Setting>
        </>
    );
}

interface Props {
    width: string,
    height: string,
    onChange: (width: string, height: string) => void
}

export default SizeProperties;
