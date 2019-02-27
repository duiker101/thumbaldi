import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
`

const Outer = styled.button`
    width:100%;
    height:100%;
`

const Popover = styled.div`
    position:absolute;
    z-index:2;
`

const Cover = styled.div`
    position:fixed;
    left:0;
    top:0;
    bottom:0;
    right:0;
`

const Inner = styled.div`
    background:${p => p.color};
    border-radius:4px;
    height:90%;
    width:100%;
`


const ColorButton = (props) => {
    const [open, setOpen] = useState(false);
    return (<Wrapper>
            <Outer onClick={() => setOpen(!open)}>
                <Inner color={props.color}/>
            </Outer>
            {open ?
                <Popover>
                    <Cover onClick={() => setOpen(false)}/>
                    {props.children}
                </Popover>
                : null}
        </Wrapper>
    );
}

ColorButton.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func
};

export default ColorButton;