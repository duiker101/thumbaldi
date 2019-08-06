import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Setting from "./Setting";

const PositionProperties: React.FC<Props> = (props) => {
    const [x, setX] = useState(props.x)
    const [y, setY] = useState(props.y)

    useEffect(() => {
        props.onChange(x, y)
    }, [x, y])

    return (
        <>
            <Setting title={'X'}>
                <input value={x} onChange={e => setX(e.target.value)}/>
            </Setting>
            <Setting title={'Y'}>
                <input value={y} onChange={e => setY(e.target.value)}/>
            </Setting>
        </>
    );
}

interface Props {
    x: string,
    y: string,
    onChange: (x: string, y: string) => void
}

export default PositionProperties;
