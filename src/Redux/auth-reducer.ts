import {authAPI, profileAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const SET_USER_DATA = "social-network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "social-network/auth/GET_CAPTCHA_URL_SUCCESS";
const GET_AUTHORIZED_USER_AVA = "social-network/auth/GET_AUTHORIZED_USER_AVA";

const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null,
    small: null as string | null,
};
export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
        case GET_AUTHORIZED_USER_AVA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

type SetAuthUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth : boolean
    small: string | null
}

type ActionsTypes = SetAuthUserDataActionType | GetCaptchaUrlSuccessActionType | SetAuthorizedUserAvaActionType;

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: SetAuthUserDataActionPayloadType
}
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean, small: string | null): SetAuthUserDataActionType => ({
    type: SET_USER_DATA, payload: {userId, email, login, isAuth, small}
});

type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: {captchaUrl: string}
}
export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
});

type SetAuthorizedUserAvaActionType = {
    type: typeof GET_AUTHORIZED_USER_AVA
    payload: string
}
export const setAuthorizedUserAva = (small: string): SetAuthorizedUserAvaActionType => ({
    type: GET_AUTHORIZED_USER_AVA, payload: small
});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const getAuthorizedUserAva = (userId: number): ThunkType => async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setAuthorizedUserAva(response.data.photos));
};

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
        const {id, email, login, small} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true, small));
    }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = (): ThunkType => async (dispatch) => {
    const response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false, null));
        }
};

export default authReducer;