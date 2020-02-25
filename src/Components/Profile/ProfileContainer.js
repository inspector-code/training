import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {getUserProfile} from "../../Redux/profile-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {

        return (
                <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let AuthRedirectComponent = (props) => {
    if (!this.props.isAuth) return <Redirect to={"/login"} />;
    return <ProfileContainer {...props}/>
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
