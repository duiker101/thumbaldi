import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import {library} from '@fortawesome/fontawesome-svg-core';
import * as core from '@fortawesome/free-solid-svg-icons';
import * as brands from '@fortawesome/free-brands-svg-icons';

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import "react-custom-scroll/dist/customScroll.css"


function processIcons(icons) {
    for (let icon in icons) {
        if (icons.hasOwnProperty(icon)) {
            if (icon !== 'fas' && icon !== 'prefix')
                library.add(icons[icon]);
        }
    }
}

processIcons(core);
processIcons(brands);

ReactDOM.render(<App/>, document.getElementById('root'));
