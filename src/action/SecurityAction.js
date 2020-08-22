import { LOGIN } from "./ActionType";
import { URL_LOGIN } from "./ActionURL";

export const login = () => async dispatch => {
    console.log("login action");
    console.log(LOGIN);
    console.log(URL_LOGIN);
    dispatch({
        type: LOGIN,
        payload: "user"
    });
};