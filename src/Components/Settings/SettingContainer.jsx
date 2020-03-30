import React, {useEffect} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getUserProfile, savePhoto, saveProfile} from "../../Redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Settings from "./Settings";
import Preloader from "../Common/Preloader/Preloader";

const SettingsContainer = ({profile, saveProfile, getUserProfile, userId, saveStatus}) => {

    useEffect(() => {
        if (!profile || profile.userId !== userId) {
            getUserProfile(userId);
        }
    }, [profile, getUserProfile, userId]);

    return (
        <>
            {profile
                ? <Settings profile={profile} saveProfile={saveProfile} userId={userId} saveStatus={saveStatus}/>
                : <Preloader/>
            }
        </>
    )
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    userId: state.auth.userId,
    saveStatus: state.profilePage.saveStatus,
});

export default compose(
    connect(mapStateToProps, {getUserProfile, savePhoto, saveProfile}),
    withAuthRedirect
)(SettingsContainer);