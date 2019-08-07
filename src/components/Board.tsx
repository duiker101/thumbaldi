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
    position: relative;
    height: 100%;
    min-height: 100%;
`

const Controls = styled.div`
    position: absolute;
    right: 0;
    top:0;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
    grid-gap: 2em;
    align-items: center;
    padding: 2em 0;
    background: rgba(0,0,0,0.1);
    min-height: 100%;
`

const Board = (props: Props) => {
    const {getAllThumbnails, addThumbnail} = useThumbnail();
    return (
        <Wrapper>
            <Scrollbars >
                <Grid>
                    {getAllThumbnails().map(t =>
                        <Thumbnail key={t.id} {...t}/>
                    )}
                    {/*<AddThumbnail />*/}
                    {/*<LinearGradientPicker color={''} onChange={()=>{}}/>*/}
                </Grid>
            </Scrollbars>
            <Controls>
                <button onClick={addThumbnail}>Add</button>
            </Controls>
        </Wrapper>
    );
}

interface Props {

}

export default Board;
