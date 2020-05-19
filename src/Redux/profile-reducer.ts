import {stopSubmit, FormAction} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {profileAPI} from "../api/profile-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";

let initialState = {
    posts: [
        {id: 1, message: "HAHAHA", likesCount: 12},
        {id: 2, message: "Next time", likesCount: 3},
        {id: 3, message: "How a u?", likesCount: 8},
        {id: 4, message: "Maaan, this so funny", likesCount: 1}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: "",
    saveStatus: false,
};

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case "SN/PROFILE/ADD-POST":
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.post, likesCount: 0}],
            };
        case "SN/PROFILE/SET_STATUS":
            return {
                ...state,
                status: action.status,
            };
        case "SN/PROFILE/SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile,
            };
        case "SN/PROFILE/DELETE_POST":
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            };
        case "SN/PROFILE/SAVE_PHOTO_SUCCESS":
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            };
        case "SN/PROFILE/SAVE_STATUS":
            return {
                ...state,
                saveStatus: action.status
            };
        default:
            return state;
    }
};

export const actions = {
    addPostActionCreator: (post: string) => ({type: "SN/PROFILE/ADD-POST", post}  as const),
    setUserProfile: (profile: ProfileType) => ({type: "SN/PROFILE/SET_USER_PROFILE", profile} as const),
    setStatus: (status: string) => ({type: "SN/PROFILE/SET_STATUS", status} as const),
    deletePost: (postId: number) => ({type: "SN/PROFILE/DELETE_POST", postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: "SN/PROFILE/SAVE_PHOTO_SUCCESS", photos} as const),
    saveStatus: (status: boolean) => ({type: "SN/PROFILE/SAVE_STATUS", status} as const)
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
};

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(data));
};

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        const data = await profileAPI.updateStatus(status);
        if (data.resultCode === 0) {
            dispatch(actions.setStatus(status));
        }
    } catch(error) {
        //
    }
};

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    const data = await profileAPI.savePhoto(file);
    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
};

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        if (userId != null) {
            dispatch(getUserProfile(userId))
        } else {
            throw new Error("userId can't be null")
        }
        dispatch(actions.saveStatus(true));
        setTimeout(() => dispatch(actions.saveStatus(false)), 10000)
    } else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}));
        return Promise.reject(data.messages[0]);
    }
};

export default profileReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>