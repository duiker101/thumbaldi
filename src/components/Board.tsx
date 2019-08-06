import React from 'react'
import styled from 'styled-components'
import Scrollbars from "react-custom-scrollbars";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
    grid-gap: 2em;
    align-items: center;
    padding: 2em 0;
`

const GG = styled.div`
    background: purple;
    width: 230px;
    height: 190px;
    margin:auto;
    
    box-shadow: 0px 3px 4px rgba(0,0,0,0.2);
`

const Board = (props: Props) => {
    return (
        <Scrollbars>
            {/*{getVal()}*/}
            <Wrapper>
                {[...Array(100)].map(() => <GG/>)}
            </Wrapper>
        </Scrollbars>
    );
}

interface Props {

}

export default Board;
