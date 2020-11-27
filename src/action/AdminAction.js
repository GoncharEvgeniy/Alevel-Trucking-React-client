import * as axios from "axios";
import {URL_ADMIN_GET_USERS} from "./ActionURL";
import {GET_USERS} from "./ActionType";

export const getUsers = () => async dispatch => {
    const token = localStorage.getItem('LoginToken');
    const response = await axios.get(
        URL_ADMIN_GET_USERS,
        {headers : {Authorization: "Bearer " + token}}
    );
    dispatch({
        type: GET_USERS,
        payload: response.data
    });
}