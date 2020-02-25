import React from 'react';
import './App.css';
import NavBar from "./Components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";

function App() {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={ () => <DialogsContainer/> }
                />
                <Route path='/profile/:userId?'
                       render={ () => <ProfileContainer/> }
                />
                <Route path='/users'
                       render={ () => <UsersContainer/> }
                />
                <Route path='/login'
                       render={ () => <LoginPage/> }
                />
            </div>
        </div>
    );
}

export default App;
