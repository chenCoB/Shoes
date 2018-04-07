import React from "react";
import { NavBar, Icon } from 'antd-mobile';
import {withRouter} from "react-router-dom"
@withRouter
class NavBars extends React.Component{

	render(){
         const pathname =  this.props.location.pathname
		return(
            <div>

            	<NavBar style={{"background":"#313131"}}>{this.props.tabData.find((v)=>
                 v.path == pathname
              ).title}</NavBar>
            </div>
			)
	}
}

export default NavBars