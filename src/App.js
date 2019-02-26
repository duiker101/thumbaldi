import React, {useState} from 'react'

import ReactDOM from "react-dom";
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Thumbnail from "./Thumbnail";
import * as html2canvas from "html2canvas";

const Wrapper = styled.div``

const App = (props) => {

    // const [background, setBackground] = useState('linear-gradient(180deg,#b33,#a22)');
    // const [fontColor, setFontColor] = useState('white');
    // const [fontSize, setFontSize] = useState('5em');

    const [background, setBackground] = useState('linear-gradient(180deg,#b33,#a22)');
    const [icon, setIcon] = useState({name: 'fab hacker-news', size: '4em', color: 'white'})
    const [text, setText] = useState({content: 'Hacker News', size: '4em', color: 'white'})

    let thumbnail = React.createRef();

    const download = () => {
        html2canvas(thumbnail.current).then((canvas) => {
            let url = canvas.toDataURL("image/png");
            let a = document.createElement('a');
            a.href = url;
            a.setAttribute('download', text);
            a.click();
        });
    }

    return (
        <Wrapper>
            <Thumbnail
                ref={thumbnail}
                text={text}
                background={background}
                icon={icon}/>

            <button onClick={download}>Download</button>
        </Wrapper>
    );
}


App.propTypes = {};

export default App;