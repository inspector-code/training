import React, {useEffect} from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthorizedUserAva, logout} from '../../Redux/auth-reducer';

const HeaderContainer = (props) => {

    useEffect(() => {
        props.getAuthorizedUserAva(props.userId);
    }, [props]);

    return (
        <Header {...props} />
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    ava: state.auth.small,
    userId: state.auth.userId,
});

export default connect(mapStateToProps, {logout, getAuthorizedUserAva})(HeaderContainer);