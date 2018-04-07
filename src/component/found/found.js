import React from 'react'
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import "./fount.css"
import Published from '../published/published'

class Found extends React.Component{
    constructor(props){
    	super(props);

    	this.state = {
    		arrImg:["lb","lb","lb"],

    	}
    }
   componentDidMount(){
       
   }

    render(){
    	return(
         <div>
         	 <WingBlank>
         	 	<Carousel autoplay={true}
         	 	dotActiveStyle ={{"background":"#5a9fe4"}}
         	 	dotStyle={{"background":"#ffffff"}}
                style={{ display: 'inline-block', width: '100%'}}
         	 	>
                 {this.state.arrImg.map(v=>(
     <a key={v}
     style={{ display: 'inline-block', width: '100%',height:"157px"}}>
      <img 
     style={{ display: 'inline-block', width: '100%'}}
                        	src={require(`../../container/img/${v}.jpg`)}/>
                        </a>
                    	))}
         	 	</Carousel>
         	 </WingBlank>
            
              <Published></Published>

         </div>
    		)
    }

}

export default Found