import React from "react";
import { TabBar } from 'antd-mobile';
import {withRouter} from "react-router-dom"
import './tabBar.css'
@withRouter
class TabBars extends React.Component{

	render(){
         const pathname =  this.props.location.pathname
		return(
            <div className="tabBar">
         
            	<TabBar
            	barTintColor="#313131"
            	>
            	{this.props.tabData.map(v=>(
                 <TabBar.Item 
                 title={v.title}
                  key={v.path}
                  icon={{uri:require(`../img/${v.icon}.png`)}}
                  selected = {v.path==pathname}
                  selectedIcon = {{uri:require(`../img/${v.icon}1.png`)}}
                  onPress ={()=>{this.props.history.push(v.path)}}
                  >

                 </TabBar.Item>
            		))}
            	
            	
            	</TabBar>
            </div>
			)
	}
}

export default TabBars