import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

function App(props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar state={props.state.sidebar}/>
            <div className="app-wrapper-content">
                <Route path="/dialogs"
                       render={ () => <Dialogs
                           addMess={props.addMess}
                           updateNewMessageText={props.updateNewMessageText}
                           dialogsPage={props.state.dialogsPage}
                       /> }/>
                <Route path="/profile"
                       render={ () => <Profile
                           addPost={props.addPost}
                           updateNewPostText={props.updateNewPostText}
                           profilePage={props.state.profilePage}
                       /> }/>
            </div>
        </div>
    );
}

export default App;
