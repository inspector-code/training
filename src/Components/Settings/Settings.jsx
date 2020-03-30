import React from "react";
import s from "./Settings.module.css";
import Preloader from "../Common/Preloader/Preloader";
import SettingsDataForm from "./SettingsDataForm";

const Settings = ({profile, saveProfile, userId, saveStatus}) => {

    const onSubmit = (formData) => {
        saveProfile(formData)
    };

    return (
        <div className={s.settingsContainer}>
            {(profile.userId === userId)
                ? <SettingsDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} saveStatus={saveStatus}/>
                : <Preloader/>
            }
        </div>
    )
};

export default Settings;