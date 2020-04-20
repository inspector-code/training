import {getAuthUserData} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false,
};

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };

        default:
            return state;
    }
};

type ActionsTypes = initializedSuccessActionType;

type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = (): initializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>;

export const initializeApp = (): ThunkType => (dispatch) => {
    const promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
};

export default appReducer;