import { LOGIN } from "../action/ActionType";

const initState = {
    currentUser: {},
    errors: []
};

const securityReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                currentUser: action.payload,
                errors: action.error
            };
        default:
            return state;
    }
};

export default securityReducer;