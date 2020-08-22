import { LOGIN } from "./ActionType";
import { URL_LOGIN } from "./ActionURL";

export const login = (userCrendetion) => async dispatch => {
    console.log(userCrendetion);
    console.log(LOGIN);
    console.log(URL_LOGIN);
    dispatch({
        type: LOGIN,
        payload: userCrendetion
    });
};