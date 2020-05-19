import {ResultCodeForCaptchaEnum, ResultCodesEnum} from "../api/api";
import {stopSubmit} from "redux-form";
import {profileAPI} from "../api/profile-api";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";

const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null,
    small: null as string | null,
};

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case "SN/auth/SET_USER_DATA":
        case "SN/auth/GET_CAPTCHA_URL_SUCCESS":
        case "SN/auth/GET_AUTHORIZED_USER_AVA":
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean, small: string | null) => ({
        type: "SN/auth/SET_USER_DATA", payload: {userId, email, login, isAuth, small}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: "SN/auth/GET_CAPTCHA_URL_SUCCESS", payload: {captchaUrl}
    } as const),
    setAuthorizedUserAva: (small: string) => ({
        type: "SN/auth/GET_AUTHORIZED_USER_AVA", payload: small
    } as const)
}

export const getAuthorizedUserAva = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(actions.setAuthorizedUserAva(data.photos));
};

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const meData = await authAPI.me();
    if (meData.resultCode === ResultCodesEnum.Success) {
        const {id, email, login, small} = meData.data;
        dispatch(actions.setAuthUserData(id, email, login, true, small));
    }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    const loginData = await authAPI.login(email, password, rememberMe, captcha);
    if (loginData.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData());
    } else {
        if (loginData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl());
        }
        let message = loginData.messages.length > 0 ? loginData.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
};

export const logout = (): ThunkType => async (dispatch) => {
    const response = await authAPI.logout();
        if (response.data.resultCode === ResultCodesEnum.Success) {
            dispatch(actions.setAuthUserData(null, null, null, false, null));
        }
};

export default authReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>