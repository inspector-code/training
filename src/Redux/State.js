const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "HAHAHA", likesCount: 12},
                {id: 2, message: "Next time", likesCount: 3},
                {id: 3, message: "How a u?", likesCount: 8},
                {id: 4, message: "Maaan, this so funny", likesCount: 1}
            ],
            newPostText: 'Hello'
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: "Pasha"},
                {id: 2, name: "Serega"},
                {id: 3, name: "Kirill"}
            ]
        }
    },
    _callSubscriber() {},
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){ //  { type: 'ADD-POST' }
        switch (action.type) {
            case 'ADD-POST':
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
                break;
            case 'UPDATE-NEW-POST-TEXT':
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
                break;
            case 'SEND-MESSAGE':
                let body = this._state.dialogsPage.newMessageBody;
                this._state.dialogsPage.newMessageBody = '';
                this._state.dialogsPage.messages.push({id: 6, message: body});
                this._callSubscriber(this._state);
                break;
            case 'UPDATE-NEW-MESSAGE-BODY':
                this._state.dialogsPage.newMessageBody = action.body;
                this._callSubscriber(this._state);
                break;
        }
    },
};

export const addPostActionCreator = () => ({
        type: ADD_POST
});

export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT, newText: text
});

export const sendMessageCreator = () => ({
        type: SEND_MESSAGE
});

export const updateNewMessageBodyCreator = (body) => ({
        type: UPDATE_NEW_MESSAGE_BODY, body: body
});

export default store;
window.store = store;
