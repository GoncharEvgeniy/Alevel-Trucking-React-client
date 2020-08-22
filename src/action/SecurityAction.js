import {LOGIN} from "./ActionType";
import {URL_LOGIN} from "./ActionURL";
import * as axios from "axios";
import * as jwt from "jsonwebtoken";

export const login = (userCrendetion) => async dispatch => {
    axios.post(URL_LOGIN, userCrendetion).then(
        response => {
            let token = response.headers.authorization.substring(7);
            localStorage.setItem('LoginToken', token);
            let user = jwt.decode(token);
            console.log(user);
            dispatch({
                type: LOGIN,
                payload: user
            });
        },
        error => {
            console.log(error);
            if (error) {
                dispatch({
                    type: LOGIN,
                    payload: {},
                    error: {error: 'bad login or password'}
                });
            }
        }
    )
};