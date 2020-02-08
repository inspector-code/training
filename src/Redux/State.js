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
            case 'ADD-MESS':
                let newMessage = {
                    id: 5,
                    message: this._state.dialogsPage.newMessageText
                };
                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newMessageText = '';
                this._callSubscriber(this._state);
                break;
            case 'UPDATE-NEW-MESSAGE-TEXT':
                this._state.dialogsPage.newMessageText = action.newMessage;
                this._callSubscriber(this._state);
                break;
        }
        // if (action.type === 'ADD-POST') {
        //     let newPost = {
        //         id: 5,
        //         message: this._state.profilePage.newPostText,
        //         likesCount: 0
        //     };
        //     this._state.profilePage.posts.push(newPost);
        //     this._state.profilePage.newPostText = '';
        //     this._callSubscriber(this._state);
        // } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        //     this._state.profilePage.newPostText = action.newText;
        //     this._callSubscriber(this._state);
        // } else if (action.type === 'ADD-MESS') {
        //     let newMessage = {
        //         id: 5,
        //         message: this._state.dialogsPage.newMessageText
        //     };
        //     this._state.dialogsPage.messages.push(newMessage);
        //     this._state.dialogsPage.newMessageText = '';
        //     this._callSubscriber(this._state);
        // } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
        //     this._state.dialogsPage.newMessageText = action.newMessage;
        //     this._callSubscriber(this._state);
        // }
    }
};

export default store;
window.store = store;
