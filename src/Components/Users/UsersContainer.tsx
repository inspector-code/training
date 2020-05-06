import {connect} from "react-redux";
import {
    follow,
    unfollow,
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
import {UserType} from "../../types/types";
import {AppStateType} from "../../Redux/redux-store";

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    auth: boolean
    followingInProgress: null | number
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: () => void
    toggleFollowingProgress: null | number
    getUsers: (currentPage: number, pageSize: number) => void
}

type PropsTypes = MapStatePropsType & MapDispatchPropsType;

const UsersContainer: React.FC<PropsTypes> = ({currentPage, pageSize, getUsers, isFetching, totalUsersCount,
                            users, follow, unfollow, followingInProgress, auth}) => {

    useEffect(() => {
        getUsers(currentPage, pageSize);
    }, [getUsers, currentPage, pageSize]);

    const onPageChanged = (pageNumber: number) => {
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
};

const mapStateToProps = (state: AppStateType) => {
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
    connect(mapStateToProps, {follow, unfollow, getUsers: requestUsers}),
    withAuthRedirect
)(UsersContainer);