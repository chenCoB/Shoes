import React from "react"

import {Switch,Route} from "react-router-dom"
import TabBars from '../tabBar/tabBar.js'
import NavBars from '../navBar/navbar.js'
import {connect} from 'react-redux';
//import {login} from "../../react.redux/react.redux.js"
//@connect(state=>state.user,{login})
import Found from '../../component/found/found.js'
import Project from "../project/project"
import Message from '../message/message'
import My from '../my/my'


class Index extends React.Component{
	render(){
		const tabData = [
         {  title:"发现",
         	path:"/found",
         	icon:"fx",
         	components:Found
         },
          {  title:"专题",
         	path:"/project",
         	icon:"zt",
         	components:Project
         },
          {  title:"消息",
         	path:"/message",
         	icon:"xx",
         	components:Message
         },
          {  title:"我的",
         	path:"/my",
         	icon:"tj",
         	components:My
         },
        ]
		return(
            <div style={{paddingBottom:"50px"}}>
            <NavBars tabData = {tabData}></NavBars>
             <Switch>
            {tabData.map(v=>(
           <Route 
           key={v.path} 
           path={v.path}
           component={v.components}>
            </Route>
             	 	))}
             </Switch>
             

               <TabBars tabData = {tabData}></TabBars>
            </div>
			)
	}

}


export default Index