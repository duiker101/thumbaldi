import React from 'react'

import styled from 'styled-components'
import StateProvider from "./store/StateProvider";
import Sidebar from "./components/sidebar/Sidebar";
import Board from "./components/Board";

const Wrapper = styled.div`
    background: #033a50;
    display: grid;
    grid-template-columns: auto 1fr;
    max-height: 100%;
    height: 100%;
`

const App = (props) => {
    return (
        <StateProvider>
            <Wrapper>
                <Sidebar/>
                <Board/>
            </Wrapper>
        </StateProvider>
    );
}


App.propTypes = {};

export default App;
