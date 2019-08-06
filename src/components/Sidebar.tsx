import React from 'react'
import useThumbnail from '../ThumbnailContext'
import styled from 'styled-components'
import Scrollbars from 'react-custom-scrollbars';

const Wrapper = styled.div`
  width: 300px;
  height: 100%;
`

const GG = styled.div`
    margin:10px;
    height: 200px;
`

const Sidebar: React.FC = () => {
    const {getVal} = useThumbnail();
    return (
        <Wrapper>
            <Scrollbars>
            </Scrollbars>
        </Wrapper>
    );
};


export default Sidebar;
