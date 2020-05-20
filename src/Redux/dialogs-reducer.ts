import {InferActionsTypes} from "./redux-store";

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: "Artem"},
        {id: 2, name: "Vika"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Yana"},
        {id: 5, name: "Olga"},
        {id: 6, name: "Angelina"}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "What the fck, maan?"},
        {id: 2, message: "Yo"},
        {id: 3, message: "Hello?! What a u doing"},
        {id: 4, message: "What a u doing"},
        {id: 5, message: "Not me"}
    ] as Array<MessageType>,
};

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SN/DIALOGS/SEND-MESSAGE":
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            };
        default:
            return state;
    }
};


export const actions = {
    sendMessage: (newMessageBody: string) => ({type: "SN/DIALOGS/SEND-MESSAGE", newMessageBody} as const)
}

export default dialogsReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>