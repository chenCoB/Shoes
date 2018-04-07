import React from 'react'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
class Message extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            messageData:[
                {
                    img:"head.png",
                    name:"漂流的猪",
                    text:"你好！大神能否收留小弟",
                    date:"10:22"
                },
                {
                    img:"zt4.jpg",
                    name:"一滴水",
                    text:"我到时候来找你",
                    date:"10:22"
                },
                {
                    img:"zt5.jpg",
                    name:"大小姐",
                    text:"情商智商最高",
                    date:"1天前"
                },
                {
                    img:"zt6.jpg",
                    name:"Meli",
                    text:"你电话多少",
                    date:"刚刚"
                }
            ]
        }
    }
    render(){

        return(
            <div>
                <WingBlank size="lg">
                    {this.state.messageData.map(v=>(
                    <Card>


                            <Card.Header
                                thumbStyle={{width:"90px",height:"90px"}}
                                title={v.name}
                                thumb={require(`./img/${v.img}`)}
                                extra={<span>{v.date}</span>}
                            />
                          <Card.Body>
                            <div>{v.text}</div>
                        </Card.Body>


                    </Card>
                    ))}
                </WingBlank>

            </div>
        )
    }
}

export default Message