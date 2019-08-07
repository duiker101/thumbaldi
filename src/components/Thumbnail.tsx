import React from 'react'
import styled from 'styled-components'
import ThumbnailImage from "./thumbnail/ThumbnailImage";
import useThumbnail, {IThumbnail} from "../store/ThumbnailContext";

const Wrapper = styled.div`
    width: 230px;
    margin:auto;
    cursor:pointer;
`;

const Name = styled.div`
    text-align:center;
`;

const Thumbnail: React.FC<IThumbnail> = (props) => {
    const {setThumbnail, setSelectedThumbnailId, getThumbnailById} = useThumbnail()
    // TODO clone and delete
    return (
        <Wrapper>
            <ThumbnailImage layers={props.layers} onClick={() => setSelectedThumbnailId(props.id)}/>
            <Name>
                {props.name}
            </Name>
        </Wrapper>
    )
}

export default Thumbnail;
