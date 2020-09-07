
const initialState = {
    users: []
}

export default function loadingReducer(state = initialState, action) {
    console.log("action=>", action)
    switch (action.type) {
        case 'SET_USER_DATA':
            return { ...state, users: action.payload };
        default:
            return state;
    }
}