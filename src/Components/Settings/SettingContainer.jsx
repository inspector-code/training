import React, {useEffect} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getUserProfile, savePhoto, saveProfile} from "../../Redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Settings from "./Settings";

const SettingsContainer = ({profile, saveProfile, getUserProfile, userId}) => {

    useEffect(() => {
            getUserProfile(userId);
    }, [profile, getUserProfile]);

    return (
        <div>
            {profile &&
            <Settings profile={profile}
                      saveProfile={saveProfile}
            />
            }
        </div>
    )
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    userId: state.auth.userId,
});

export default compose(
    connect(mapStateToProps, {getUserProfile, savePhoto, saveProfile}),
    withAuthRedirect
)(SettingsContainer);