import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core';
import * as core from '@fortawesome/free-solid-svg-icons';
import * as brands from '@fortawesome/free-brands-svg-icons';


function processIcons(icons){
    for(let icon in icons){
        if(icons.hasOwnProperty(icon)){
            if(icon !== 'fas' && icon !== 'prefix')
                library.add(icons[icon]);
        }
    }
}

processIcons(core);
processIcons(brands);

ReactDOM.render(<App/>, document.getElementById('root'));
