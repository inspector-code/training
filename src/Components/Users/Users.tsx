import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import s from "./users.module.css";
import {UserType} from "../../types/types";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
    users: Array<UserType>
    followingInProgress: null | number
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    auth: boolean
}

const Users: React.FC<PropsType> = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return (
        <>
            <div className={s.usersList}>
                {users.map(u => <User user={u}
                                      followingInProgress={props.followingInProgress}
                                      key={u.id}
                                      unfollow={props.unfollow}
                                      follow={props.follow}
                                      auth={props.auth}
                />)}
            </div>
            <div className={s.paginatorContainer}>
                <Paginator currentPage={currentPage}
                           onPageChanged={onPageChanged}
                           totalItemsCount={totalUsersCount}
                           pageSize={pageSize}
                />
            </div>
        </>
    )
};

export default Users;