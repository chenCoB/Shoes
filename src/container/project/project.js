import React from 'react'

class Project extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            arrGirdImg:["zt1","zt2","zt3","zt4","zt5","zt6","zt7","zt8","zt9","zt10"]
        }
    }
    render(){
        return(
            <div>
                {this.state.arrGirdImg.map(v=>(
                    <div style={{
                        width:"50%",
                        padding:"0 2%",
                        marginTop:"2%",
                        float:"left",
                        position:"relative",
                        boxSizing:"border-box",
                       hegiht:"104px"
                    }}>
                        <div
                         style={{
                             position:"absolute",
                             top:"0",
                             left:"2%",

                             background:"rgba(0,0,0,0.3)",
                             width:"96%",

                             height:"100%",
                             textAlign:"center",

                         }}
                        >
                            <h4 style={{
                                color:"#fff",
                                fontSize:"16px"
                            }}>影视</h4>
                            <p style={{
                                color:"#ff9000",
                                fontSize:"14px"
                            }}>1200篇</p>
                        </div>
                        <img style={{width:"100%",fontSize:"0px"}} src={require(`./img/${v}.jpg`)} alt=""/>
                    </div>
                ))}

            </div>
        )
    }
}

export default Project