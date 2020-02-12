import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

function App(props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs"
                       render={ () => <DialogsContainer/> }
                />
                <Route path="/profile"
                       render={ () => <Profile/> }
                />
            </div>
        </div>
    );
}

export default App;
