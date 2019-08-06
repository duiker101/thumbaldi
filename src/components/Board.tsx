import React from 'react'
import styled from 'styled-components'
import Scrollbars from "react-custom-scrollbars";
import Thumbnail from "./Thumbnail";
import useThumbnail from "../store/ThumbnailContext";
import AddThumbnail from "./AddThumbnail";
import SolidColorPicker from "./color/SolidColorPicker";
import ColorButton from "./color/ColorButton";
import LinearGradientPicker from "./color/LinearGradientPicker";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
    grid-gap: 2em;
    align-items: center;
    padding: 2em 0;
    background: rgba(0,0,0,0.1);
    height: 100%;
`

const Board = (props: Props) => {
    const {getAllThumbnails} = useThumbnail();
    return (
        <Scrollbars>
            <Wrapper>
                {getAllThumbnails().map(t =>
                    <Thumbnail key={t.id} {...t}/>
                )}
                {/*<AddThumbnail />*/}
                {/*<LinearGradientPicker color={''} onChange={()=>{}}/>*/}
            </Wrapper>
        </Scrollbars>
    );
}

interface Props {

}

export default Board;
