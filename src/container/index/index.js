import React from 'react';
import Header from '../../component/header/header'
import "./index.css"
import bg from './img/bg.png'
class Index extends  React.Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
       this.sign = this.sign.bind(this)
    }
    login(){
   this.props.history.push("/login")
    }
    sign(){
     this.props.history.push("/sign")
    }
    render(){
        return(
            <div className="index">
                <Header></Header>
                <div className="content">
                    <img src={bg} alt=""/>

                </div>
                <footer>
                    <div onClick={this.login}>LOGIN</div>
                    <div onClick={this.sign}>SIGN UP</div>
                </footer>
            </div>
        )
    }
}

export default Index