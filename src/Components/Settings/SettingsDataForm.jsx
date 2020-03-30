import React from "react";
import {createField, Input, Textarea} from "../Common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from "./Settings.module.css";
import style from "../Common/FormsControls/FormsControls.module.css";

const SettingsDataForm = ({handleSubmit, profile, error, saveStatus}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={s.settingsTitle}>Main information</div>
            <div className={s.formContainer}>
                <div className={s.settingsField}>
                    <div>Name:</div>
                    {createField("Full name", "fullName", [], Input)}
                </div>
                <div className={s.settingsField}>
                    <div>About me:</div>
                    {createField("About me", "aboutMe", [], Textarea)}
                </div>
                <div className={s.settingsField}>
                    <div>Looking for a job:</div>
                    {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
                </div>
                <div className={s.settingsField}>
                    <div>My professional skills:</div>
                    {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
                </div>
                {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.settingsContactsField}>
                        <div>{key}:</div>
                        {createField(key, "contacts." + key, [], Input)}
                    </div>
                })}
                <div>{saveStatus && <div className={s.saveStatus}>Change saved</div>}</div>
                <div className={s.saveButton}>
                    <button>Save</button>
                </div>
                {error && <div className={style.formSummaryError}>
                    {error}
                </div>
                }
            </div>
        </form>
    )
};

export default reduxForm({form: 'edit-profile'})(SettingsDataForm);

