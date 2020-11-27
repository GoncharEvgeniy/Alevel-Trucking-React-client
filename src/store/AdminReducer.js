import {GET_USERS} from "../action/ActionType";

let initState = {
    usersFromDatabase: []
}

const AdminReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                usersFromDatabase: action.payload,
            };
        default:
            return state;
    }
}

export default AdminReducer