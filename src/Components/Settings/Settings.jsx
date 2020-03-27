import React from "react";
import s from "./Settings.module.css";
import ProfileDataForm from "../Profile/ProfileInfo/ProfileDataForm";

const Settings = ({profile, saveProfile}) => {

    const onSubmit = (formData) => {
        saveProfile(formData)
    };

    return (
        <div>
            <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
        </div>
    )
};

export default Settings;