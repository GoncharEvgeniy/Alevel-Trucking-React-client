import {LOGIN} from "./ActionType";
import {URL_LOGIN} from "./ActionURL";
import * as axios from "axios";

export const login = (userCrendetion) => async dispatch => {
    axios.post(URL_LOGIN, userCrendetion).then(
        response => {
            console.log(response);
            dispatch({
                type: LOGIN,
                payload: userCrendetion
            });
        },
        error => {
            console.log(error);
            dispatch({
                type: LOGIN,
                payload: userCrendetion
            });
        }
    )
};