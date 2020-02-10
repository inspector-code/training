import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    },
};

export default store;
window.store = store;
