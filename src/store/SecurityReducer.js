import { LOGIN } from "../action/ActionType";

const initState = {
    currentUser: {}
};

const securityReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state
            };
        default:
            return state;
    }
};

export default securityReducer;