import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import s from "./users.module.css";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return (
        <>
            <div className={s.usersList}>
                {users.map(u => <User user={u}
                                      followingInProgress={props.followingInProgress}
                                      key={u.id}
                                      unfollow={props.unfollow}
                                      follow={props.follow}
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