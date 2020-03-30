import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user_cat2.png"

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    let [editPhoto, setEditPhoto] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    return (
        <div className={s.userInfo}>
            <div className={s.photoNameAndStatus}>
                <div onMouseLeave={() => setEditPhoto(false)}>
                    <img onMouseOver={() => setEditPhoto(true)} src={profile.photos.large || userPhoto}
                         className={s.mainPhoto}
                         alt="large_photo"/>
                    {editPhoto && isOwner &&
                    <div className={s.uploadButton}>
                        <label>
                            <input type={"file"} onChange={mainPhotoSelected}/>
                            <div><i className="fas fa-pen"></i></div>
                        </label>
                    </div>
                    }
                </div>
                <div className={s.nameAndStatus}>
                    <div>{profile.fullName}</div>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner}/>
                </div>
                <div className={s.socialNetworks}>
                    <div>
                        {profile.contacts.facebook &&
                        <a href={profile.contacts.facebook} target={"_blank"}><i className="fab fa-facebook"></i></a>}
                        {profile.contacts.website &&
                        <a href={profile.contacts.website} target={"_blank"}><i className="fas fa-info-circle"></i></a>}
                        {profile.contacts.vk &&
                        <a href={profile.contacts.vk} target={"_blank"}><i className="fab fa-vk"></i></a>}
                        {profile.contacts.twitter &&
                        <a href={profile.contacts.twitter} target={"_blank"}><i className="fab fa-twitter"></i></a>}
                        {profile.contacts.instagram &&
                        <a href={profile.contacts.instagram} target={"_blank"}><i className="fab fa-instagram"></i></a>}
                        {profile.contacts.youtube &&
                        <a href={profile.contacts.youtube} target={"_blank"}><i className="fab fa-youtube"></i></a>}
                        {profile.contacts.github &&
                        <a href={profile.contacts.github} target={"_blank"}><i className="fab fa-github"></i></a>}
                        {profile.contacts.mainLink &&
                        <a href={profile.contacts.mainLink} target={"_blank"}><i className="fab fa-line"></i></a>}
                    </div>
                </div>
            </div>
            <div className={s.aboutSection}>
                <div>
                    <div>About me:</div>
                    <div>{profile.aboutMe}</div>
                </div>
                <div>
                    <div>Looking for a job:</div>
                    <div>{profile.lookingForAJob ? "yes" : "no"}</div>
                </div>
                {profile.lookingForAJob &&
                <div>
                    <div>My professional skills:</div>
                    <div>{profile.lookingForAJobDescription}</div>
                </div>
                }
            </div>
        </div>
    )
};

export default ProfileInfo;