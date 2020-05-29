import React, {ChangeEvent, useEffect, useState} from "react";
import s from "./ProfileInfo.module.css";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    const [statusButton, hideButton] = useState(false);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <>
            {!editMode &&
            <div className={s.editStatusField}
                 onMouseOver={() => hideButton(true)}
                 onMouseLeave={() => hideButton(false)}
            >
                <span>{props.status || "Нет статуса"}</span>
                {statusButton && props.isOwner && <button onClick={activateEditMode}><i className="fas fa-pen"></i></button>}
            </div>
            }
            { editMode &&
            <div className={s.editStatusField}>
                <input onChange={onStatusChange} autoFocus value={status}/>
                <button onClick={deactivateEditMode}><i className="fas fa-check"></i></button>
            </div>
            }
        </>
    )
};

export default ProfileStatusWithHooks;