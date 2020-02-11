const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

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
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
});

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
});

export default dialogsReducer;