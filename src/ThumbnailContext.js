import React, {useContext, useState} from 'react';

const defaultValue = {value:'hi',thumbnails: []}
const ThumbnailContext = React.createContext({});

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

    function changeVal(x) {
        setState(state => ({...state, value: x + Math.random()}));
    }

    function getVal() {
        return state.value
    }

    return {
        getVal,
        changeVal,
    }
};

export {ThumbnailProvider}
export default useThumbnail;
