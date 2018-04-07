import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
import Index from './container/index/index.js'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import "./App.css"
//import {reducers} from "./react.redux/react.redux.js"
//const store = createStore(reducers)
ReactDOM.render(
   // <Provider store={store}>
    <Router>
        <Switch>
             <Route component={Index}></Route>
        </Switch>
    </Router>
   // </Provider>
    , document.getElementById('root'));

