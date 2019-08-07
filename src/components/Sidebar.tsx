import React from 'react'
import useThumbnail, {IColor, IImage, ILayer, IRect, ISolidColor, IText} from '../store/ThumbnailContext'
import styled from 'styled-components'
import Scrollbars from 'react-custom-scrollbars';
import TextSetting from "./settings/TextSetting";
import RectSetting from "./settings/RectSetting";
import ImageSetting from "./settings/ImageSetting";
import uuid4 from 'uuid4'

const Wrapper = styled.div`
  width: 300px;
  height: 100%;
  border-right: 1px solid rgba(0,0,0,0.5);
  box-shadow: 0px 0px 4px #00000055
`

const Header = styled.div`
    font-weight: 700;
    font-size: 1.5em;
    margin:0;
    border-bottom: 1px solid rgba(0,0,0,0.5);
    text-align: center;
    padding: .8em;
`

const Sidebar: React.FC = () => {
    const {getSelectedThumbnail, addLayer} = useThumbnail();
    const thumbnail = getSelectedThumbnail()

    return (
        <Wrapper>
            <Header>Header</Header>
            <Scrollbars>
                {/*{thumbnail.name}*/}
                {thumbnail.layers.map(l => {
                        if (l.type === 'rect')
                            return <RectSetting key={l.id} {...l as IRect} />
                        if (l.type === 'text')
                            return <TextSetting key={l.id} {...l as IText} />
                        if (l.type === 'image')
                            return <ImageSetting key={l.id} {...l as IImage} />
                        return l.type
                    }
                )}
                <div>
                    <button
                        onClick={() => addLayer(thumbnail.id,
                            {
                                id: uuid4(),
                                type: 'rect',
                                fill: {type: 'solid', color: '#000000'},
                            }
                        )}
                    >rect
                    </button>
                </div>
            </Scrollbars>
        </Wrapper>
    );
};


export default Sidebar;
