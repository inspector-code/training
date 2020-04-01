import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../Redux/profile-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const ProfileContainer = ({match, authorizedUserId, history, getUserProfile, getStatus,
                              profile, status, updateStatus, savePhoto, ...props}) => {

    useEffect(() => {
        let userId = match.params.userId;
        if (!userId) {
            userId = authorizedUserId;
            if (!userId) {
                history.push("/login");
            }
        }
        getUserProfile(userId);
        getStatus(userId);
    }, [match.params.userId, authorizedUserId, history, getUserProfile, getStatus]);

        return (
                <Profile {...props}
                         isOwner={!match.params.userId}
                         profile={profile}
                         status={status}
                         updateStatus={updateStatus}
                         savePhoto={savePhoto}
                />
        )
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
