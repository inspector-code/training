import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress,
    requestUsers
} from "../../Redux/users-reducer";
import React, {useEffect} from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getAuthStatus,
} from "../../Redux/users-selectors";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const UsersContainer = ({currentPage, pageSize, getUsers, isFetching, totalUsersCount,
                            users, follow, unfollow, followingInProgress, auth}) => {

    useEffect(() => {
        getUsers(currentPage, pageSize);
    }, [getUsers, currentPage, pageSize]);

    const onPageChanged = (pageNumber) => {
        getUsers(pageNumber, pageSize);
    };

    return (
        <>
            {isFetching && <Preloader/>}
            <Users totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   users={users}
                   follow={follow}
                   unfollow={unfollow}
                   followingInProgress={followingInProgress}
                   auth={auth}
            />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        auth: getAuthStatus(state),
    }
};

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers}),
    withAuthRedirect
)(UsersContainer);