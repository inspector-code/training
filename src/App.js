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
                       render={ () => <Dialogs state={props.state.dialogsPage} /> }/>
                <Route path="/profile"
                       render={ () => <Profile
                           state={props.state.profilePage}
                           addPost={props.addPost} /> }/>
            </div>
        </div>
    );
}

export default App;
