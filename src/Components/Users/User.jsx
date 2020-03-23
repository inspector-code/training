import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/user_cat2.png"
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={s.user}>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.large != null ? user.photos.large : userPhoto}
                         className={s.userPhoto} alt="ava"/>
                </NavLink>
            </div>
            <div className={s.userInfo}>
                <div className={s.userNameAndStatus}>
                    <div>
                        <div className={s.userName}>{user.name}</div>
                        <div className={s.userStatus}>{user.status}</div>
                    </div>
                    <div className={s.socialNetworks}>
                        <i className="fab fa-facebook fa-lg"></i>
                        <i className="fab fa-instagram fa-lg"></i>
                        <i className="fab fa-telegram fa-lg"></i>
                    </div>
                </div>
                <div className={s.followButtons}>
                    {user.followed
                        ? <button disabled={followingInProgress === user.id}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}
                                  className={s.unfollowButton}
                        >Unfollow</button>
                        : <button disabled={followingInProgress === user.id}
                                  onClick={() => {
                                      follow(user.id)
                                  }}
                                  className={s.followButton}
                        >Follow</button>}
                </div>
            </div>
        </div>
    )
};

export default User;