
const initialState = {
    isloading: false
}

export default function loadingReducer(state = initialState, action) {
    console.log("action=>", action)
    switch (action.type) {
        case 'LOADING_START':
            return { ...state, isloading: action.payload };
        case 'LOADING_END':
            return { ...state, isloading: action.payload };
        default:
            return state;
    }
}