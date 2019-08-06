import React, {useState} from 'react'
import styled from 'styled-components'
import {Collapse} from "@blueprintjs/core";

const Wrapper = styled.div`
    border-bottom: 1px solid black;
`

const Content = styled.div`
    padding: 10px;
`

const Header = styled.div<any>`
    user-select: none;
    cursor:pointer;
    padding:1em;
    font-size: 1.2em;
    background: rgba(100,100,100,0.2);
    ${p => p.open ? 'border-bottom: 1px solid black;' : ''}
`

const Settings: React.FC<Props> = (props) => {
    const [open, setOpen] = useState(false)
    return (
        <Wrapper>
            <Header open={open} onClick={() => setOpen(!open)}>{props.title}</Header>
            <Collapse isOpen={open}>
                <Content>
                    {props.children}
                </Content>
            </Collapse>
        </Wrapper>
    );
}

interface Props {
    title: string
}

export default Settings;
