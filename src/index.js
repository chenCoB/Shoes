import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
import Index from './container/index/index'
import Product from './container/product/product'
function Login(){
    return <div>logi11n</div>
}
function Sign(){
    return <div>SIGN</div>
}
ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/sign" component={Sign}></Route>
            <Route path="/product" component={Product}></Route>
            <Route component={Index}></Route>
        </Switch>
    </Router>
    , document.getElementById('root'));

