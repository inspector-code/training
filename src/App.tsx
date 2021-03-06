import React, {useEffect} from "react";
import "./App.css";
import NavBar from "./Components/Navbar/Navbar";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./Components/Common/Preloader/Preloader";
import store, {AppStateType} from "./Redux/redux-store";
import {withSuspens} from "./hoc/withSuspens";
import NotFound from "./Components/Common/404/NotFound";
import SettingsContainer from "./Components/Settings/SettingContainer";

const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

const SuspendedDialogs = withSuspens(DialogsContainer);
const SuspendedProfile = withSuspens(ProfileContainer);

const App = (props: MapPropsType & DispatchPropsType) => {

    useEffect(() => {
        if (!props.initialized) {
            props.initializeApp();
        }
    });

    return (
        <>
            {!props.initialized ? <Preloader/> : <>
                <header>
                    <div className={"container"}>
                        <HeaderContainer/>
                    </div>
                </header>
                <section>
                    <div className={"container"}>
                        <div className={props.auth ? "app-wrapper" : ""}>
                            {props.auth &&
                            <nav>
                                <div className={"navbar"}>
                                    <NavBar/>
                                </div>
                            </nav>
                            }
                            <main>
                                <Switch>
                                    <Route exact path="/"
                                           render={() => <Redirect to={"/profile"}/>}
                                    />
                                    <Route path="/dialogs"
                                           render={() => <SuspendedDialogs />}
                                    />
                                    <Route path="/profile/:userId?"
                                           render={() => <SuspendedProfile />}
                                    />
                                    <Route path="/users"
                                           render={() => <UsersContainer/>}
                                    />
                                    <Route path="/settings"
                                           render={() => <SettingsContainer/>}
                                    />
                                    <Route path="/login"
                                           render={() => <LoginPage/>}
                                    />
                                    <Route path="*"
                                           render={() => <NotFound/>}
                                    />
                                </Switch>
                            </main>
                        </div>
                    </div>
                </section>
            </>}
        </>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized,
    auth: state.auth.isAuth,
});

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const CatNETApp: React.FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
};

export default CatNETApp;
