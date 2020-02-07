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
            newMessageText: 'what?'
        },
        sidebar: {
            friends: [
                {id: 1, name: "Pasha"},
                {id: 2, name: "Serega"},
                {id: 3, name: "Kirill"}
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {},
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    addMess() {
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

export default store;
window.store = store;
