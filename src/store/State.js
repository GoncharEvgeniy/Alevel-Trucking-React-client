import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as reduxFormReducer } from 'redux-form';
import thunk from "redux-thunk";
import securityReducer from "./SecurityReducer";
import adminReduser from './AdminReducer';

const middleware = [thunk];

let reducers = combineReducers({
    form: reduxFormReducer,
    security: securityReducer,
    admin: adminReduser
});

let store = createStore(reducers, compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;