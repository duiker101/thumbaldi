import React from 'react'
import styled from 'styled-components'
import ThumbnailImage from "./thumbnail/ThumbnailImage";

const Wrapper = styled.div`
    //width: 440px;
    //height: 360px;
    width: 230px;
    height: 230px;
    margin:auto;
`;

const AddThumbnail = (props: Props) => {
    return (
        <Wrapper>
            {/*<ThumbnailImage layers={[{id: '', text: '+'}]}/>*/}
        </Wrapper>
    );
}

interface Props {

}

export default AddThumbnail;
