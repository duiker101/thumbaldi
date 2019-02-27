import React, {useState} from 'react'

import ReactDOM from "react-dom";
import styled from 'styled-components'
import Thumbnail from "./components/Thumbnail";
import ColorPicker from "./components/color/ColorPicker";
import IconPicker from "./components/IconPicker";
import TextPicker from "./components/TextPicker";
import * as htmlToImage from "html-to-image";

const Wrapper = styled.div``
const ThumbWrapper = styled.div`
    box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
    width:440px;
    //margin:auto;
`

const App = (props) => {
    const [background, setBackground] = useState('red');
    const [icon, setIcon] = useState({name: 'fas anchor', size: '4x', color: 'white'})
    const [title, setTitle] = useState({content: 'Vivaldi', size: '4em', color: 'white'})
    const [subtitle, setSubtitle] = useState({content: 'Subtitle', size: '2em', color: 'white'})

    let thumbnail = React.createRef();

    const download = () => {
        htmlToImage.toPng(ReactDOM.findDOMNode(thumbnail.current))
            .then(function (url) {
                let a = document.createElement('a');
                a.href = url;
                let filename = title.content;
                if (subtitle.content.length > 0)
                    filename += '_' + subtitle.content;
                a.setAttribute('download', filename + '.png');
                a.click();
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    }


    return (
        <Wrapper>
            <ThumbWrapper>
                <Thumbnail
                    ref={thumbnail}
                    title={title}
                    subtitle={subtitle}
                    background={background}
                    icon={icon}/>
            </ThumbWrapper>

            <ColorPicker color={background} onChange={setBackground}/>
            <IconPicker icon={icon} onChange={setIcon}/>
            <TextPicker text={title} onChange={setTitle}/>
            <TextPicker text={subtitle} onChange={setSubtitle}/>
            <button onClick={download}>Download</button>
        </Wrapper>
    );
}


App.propTypes = {};

export default App;