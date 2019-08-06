import React from 'react'
import useThumbnail from '../../store/ThumbnailContext'
import styled from 'styled-components'
import Scrollbars from 'react-custom-scrollbars';
import LayerSetting from "./LayerSetting";
import TextLayerSetting from "./TextLayerSetting";

const Wrapper = styled.div`
  width: 300px;
  height: 100%;
  border-right: 1px solid rgba(0,0,0,0.5);
`

const Header = styled.div`
    font-weight: 700;
    font-size: 1.5em;
    margin:0;
    border-bottom: 1px solid rgba(0,0,0,0.5);
    text-align: center;
    padding: .8em;
`

const GG = styled.div`
    margin:10px;
    height: 200px;
`

const Sidebar: React.FC = () => {
    const {getSelectedThumbnail} = useThumbnail();
    const thumbnail = getSelectedThumbnail()

    return (
        <Wrapper>
            <Header>Header</Header>
            <Scrollbars>
                {thumbnail.name}
                {thumbnail.layers.map(l => {
                        if (l.type === 'text')
                            return <TextLayerSetting {...l} />
                    }
                )}

            </Scrollbars>
        </Wrapper>
    );
};


export default Sidebar;
