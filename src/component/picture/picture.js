//图片展示模块
import React from 'react'
import "./picture.css"
class Picture extends  React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(11)
    }
    render(){

        return(
           <div className="picture">
               {this.props.arrGirdImg.map(v=>(
                   <div className="gridImg">
                       <img src={require(`./img/${v}.jpg`)}/>
                   </div>
               ))}


           </div>
        )
    }
}
export default Picture