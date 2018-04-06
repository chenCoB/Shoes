import "./header.css";
import React from 'react';
import {NavBar,Icon} from 'antd-mobile'
class Header extends  React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
             <div className="header">
                 <NavBar
                     mode="light"
                     icon={<Icon type="left" />}
                 >PARALLAX</NavBar>
             </div>
        )
    }
}

export default Header