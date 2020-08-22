import React from 'react';
import './App.css';
import NavBar from "./component/NavBar";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from "./component/page/main/Main";
import Login from "./component/page/log/Login";
import Registration from "./component/page/log/Registration";
import Home from "./component/page/home/Home";
import createHistory from "history/createBrowserHistory";
import NotFound from "./component/page/notFound/NotFound";
import {connect} from "react-redux";

const history = createHistory();

const App = (props) => {
  return (
    <BrowserRouter history={history} basename={'/tracking'}>
        <div>
            <div>
                <h1>
                    Tracking in Ukraine
                </h1>
            </div>
            <div>
                <NavBar />
            </div>
            <div>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/registration' component={Registration} />
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/logout' />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </div>
    </BrowserRouter>
  );
};

export default connect()(App);
