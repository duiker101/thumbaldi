import React, {useContext, useState} from 'react';
import {produce} from "immer";
import uuid4 from 'uuid4'

let firstId = uuid4();
const defaultValue = {
    selected: firstId,
    thumbnails: [
        {
            id: firstId,
            name: 'Test',
            layers: [
                {id: uuid4(), type: 'text', text: 'Hello'}
            ]
        }
    ]
}


const ThumbnailContext = React.createContext(defaultValue);

const ThumbnailProvider = (props) => {
    const [state, setState] = useState(defaultValue);
    return (
        <ThumbnailContext.Provider value={[state, setState]}>
            {props.children}
        </ThumbnailContext.Provider>
    );
}


const useThumbnail = () => {
    const [state, setState] = useContext(ThumbnailContext);

    function setLayer(thumbnailId, layer) {
        setState(produce(({thumbnails}) => {
            let thumbnail = thumbnails[thumbnails.findIndex(t => t.id === thumbnail.id)]
            thumbnail[thumbnail.findIndex(l => l.id === layer.id)] = layer
        }))
    }

    function setThumbnail(thumbnail) {
        setState(produce(({thumbnails}) => {
            thumbnails[thumbnails.findIndex(t => t.id === thumbnail.id)] = thumbnail
        }))
    }

    function getAllThumbnails() {
        return state.thumbnails
    }

    function getSelectedThumbnail() {
        return state.thumbnails[state.thumbnails.findIndex(t => t.id === state.selected)]
    }

    return {
        getSelectedThumbnail,
        getAllThumbnails,
        setThumbnail,
        setLayer
    }
};

export {ThumbnailProvider}
export default useThumbnail;
