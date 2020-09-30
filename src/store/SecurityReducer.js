import {LOGIN, LOGOUT, REGISTRATION} from "../action/ActionType";

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
        case REGISTRATION:
            return {
                ...state,
                errors: action.error
            };
        case LOGOUT:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
};

export default securityReducer;