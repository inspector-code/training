import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthorizedUserAva, logout} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthorizedUserAva(this.props.userId)
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    ava: state.auth.small,
    userId: state.auth.userId,
});

export default connect(mapStateToProps, {logout, getAuthorizedUserAva})(HeaderContainer);