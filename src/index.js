import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {subscribe, addPost, updateNewPostText, addMess, updateNewMessageText} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addMess={addMess}
                 updateNewMessageText={updateNewMessageText}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText} />
        </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

