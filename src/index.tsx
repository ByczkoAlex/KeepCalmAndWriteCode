import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {rerenderTree} from "./render";
import state from "./redux/state";

rerenderTree(state);

serviceWorker.unregister();