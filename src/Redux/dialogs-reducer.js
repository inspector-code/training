const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [
        {id: 1, name: "Artem"},
        {id: 2, name: "Vika"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Yana"},
        {id: 5, name: "Olga"},
        {id: 6, name: "Angelina"}
    ],
    messages: [
        {id: 1, message: "What the fck, maan?"},
        {id: 2, message: "Yo"},
        {id: 3, message: "Hello?! What a u doing"},
        {id: 4, message: "What a u doing"},
        {id: 5, message: "Not me"}
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({
    type: SEND_MESSAGE, newMessageBody
});

export default dialogsReducer;