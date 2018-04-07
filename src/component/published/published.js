import React from 'react'
import "./published.css"
import Picture from '../picture/picture'
class Published extends React.Component{
	constructor(props){
		super(props)
		this.state = {
            arrGirdImg:[1,2,3,4,5,6,1,2,5,6,5]
		}
	}
     render(){
     	return(
 <div>
	 <div className="published">
     	   	   <div className="head">
                <img src={require(`./img/head.png`)}/>
     	   	   </div>
     	   	   <div className="time">
                <h4>一滴水</h4>
                <p>14分钟前</p>
     	   	   </div>
     	   	   <div className="field">
                GUI设计
     	   	   </div>
     	   </div>
	 <h1 style={{fontSize:"16px",color:'#333333',padding:"0 15px"}}>酒店预订系统app一枚，欢迎欣赏！</h1>
     <Picture arrGirdImg ={ this.state.arrGirdImg}></Picture>
 </div>
     		)
     }
}

export default Published;