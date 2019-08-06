import React, {useContext, useState} from 'react';
import {produce} from "immer";
import uuid4 from 'uuid4'


export interface IColor {
    type: string
}

export interface ISolidColor extends IColor {
    color: string
}

export interface ILinearGradient extends IColor {
    stops: any
}

export interface IRect extends ISolid {
    fill: IColor
}

export interface IText extends ISolid {
    text: string
}

export interface ISolid extends ILayer {
    x: string,
    y: string,
    width: string,
    height: string,
}

export interface ILayer {
    id: string,
    type: string,
    index: number
}

export interface IThumbnail {
    id: string,
    name: string,
    layers: ILayer[]
}

let firstId = uuid4();
const defaultValue = {
    selected: firstId,
    thumbnails: [
        {
            id: firstId,
            name: 'Test',
            layers: [
                {
                    id: uuid4(),
                    index: 0,
                    type: 'rect',
                    fill: {
                        type: 'solid',
                        color: 'red'
                        // type: 'gradient',
                        // stops: [{percentage: '0%', color: 'red'}, {percentage: '100%', color: 'blue'}]
                    }
                },
                {id: uuid4(), index: 1, type: 'text', text: 'Hello'}
            ]
        }
    ]
}

const ThumbnailContext = React.createContext<any>(defaultValue);

const ThumbnailProvider = (props) => {
    const [state, setState] = useState(defaultValue);
    return (
        <ThumbnailContext.Provider value={[state, setState]}>
            {props.children}
        </ThumbnailContext.Provider>
    );
}


const useThumbnail = () => {
    const [state, setState] = useContext<any>(ThumbnailContext);

    function setLayer(thumbnailId, layer: any): void {
        setState(produce(({thumbnails}) => {
            let thumbnail = thumbnails[thumbnails.findIndex(t => t.id === thumbnailId)]
            thumbnail.layers[thumbnail.layers.findIndex(l => l.id === layer.id)] = layer
        }))
    }

    function setThumbnail(thumbnail: IThumbnail): void {
        setState(produce(({thumbnails}) => {
            thumbnails[thumbnails.findIndex(t => t.id === thumbnail.id)] = thumbnail
        }))
    }

    function getAllThumbnails(): IThumbnail[] {
        return state.thumbnails
    }

    function getSelectedThumbnail(): IThumbnail {
        return state.thumbnails[state.thumbnails.findIndex(t => t.id === state.selected)]
    }

    function getSelectedThumbnailId(): string {
        return state.selected
    }

    return {
        getSelectedThumbnail,
        getSelectedThumbnailId,
        getAllThumbnails,
        setThumbnail,
        setLayer
    }
};

export {ThumbnailProvider}
export default useThumbnail;
