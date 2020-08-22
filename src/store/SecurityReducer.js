import { LOGIN } from "../action/ActionType";

const securityReducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state
            };
        default:
            return state;
    }
};