import React from 'react';
import {ThumbnailProvider} from "./ThumbnailContext";

const StateProvider = (props) => {
    return (
        <ThumbnailProvider>
            {props.children}
        </ThumbnailProvider>
    );
}

export default StateProvider;
