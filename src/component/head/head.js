import React from "react"

import "../published/published.css"

class Head extends React.Component{
    render(){
        return(
            <div style={{overflow:"hidden"}}>
                <div className="head">
                    <img src={require(`../published/img/head.png`)}/>
                </div>
                <div className="time">
                    <h4>一滴水</h4>
                    <p>14分钟前</p>
                </div>
                <div className="field">
                    GUI设计
                </div>

            </div>
        )
    }
}
export default Head