import React from "react";
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
import store from "./Redux/redux-store";
import {withSuspens} from "./hoc/withSuspens";
import NotFound from "./Components/Common/404/NotFound";
import SettingsContainer from "./Components/Settings/SettingContainer";

const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"));

class App extends React.Component {

    catchAllUnhandleErrors = (reason, promise) => {
        //alert("Some error occured");
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandleErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandleErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <>
                <header>
                    <div className={"container"}>
                        <HeaderContainer/>
                    </div>
                </header>
                <section>
                    <div className={"container"}>
                        <div className={this.props.auth && "app-wrapper"}>
                            {this.props.auth &&
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
                                           render={withSuspens(DialogsContainer)}
                                    />
                                    <Route path="/profile/:userId?"
                                           render={withSuspens(ProfileContainer)}
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
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    auth: state.auth.isAuth,
});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const CatNETApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
};

export default CatNETApp;
