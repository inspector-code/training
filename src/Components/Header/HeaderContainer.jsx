import React, {useEffect} from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthorizedUserAva, logout} from '../../Redux/auth-reducer';

const HeaderContainer = (props) => {

    useEffect(() => {
        if (props.profile && props.ava !== props.profile.photos.small) {
            props.getAuthorizedUserAva(props.userId);
        }
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
    profile: state.profilePage.profile,
});

export default connect(mapStateToProps, {logout, getAuthorizedUserAva})(HeaderContainer);