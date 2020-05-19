import profileReducer, {actions} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: "HAHAHA", likesCount: 12},
        {id: 2, message: "Next time", likesCount: 3},
        {id: 3, message: "How a u?", likesCount: 8},
        {id: 4, message: "Maaan, this so funny", likesCount: 1}
    ],
    profile: null,
    status: "",
    saveStatus: false,
};

test('length of posts should be incremented', () => {
    let action = actions.addPostActionCreator("privet");
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5);
});

test('message of new post should be correct', () => {
    let action = actions.addPostActionCreator("privet");
    let newState = profileReducer(state, action);
    expect(newState.posts[4].message).toBe("privet");
});

test('after deleting length of messages should be decrement', () => {
    let action = actions.deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});

test('after deleting length should be decrement if id is incorrect', () => {
    let action = actions.deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});
