import React from "react"
import Head from '../../component/head/head'
import { List,WhiteSpace, WingBlank } from 'antd-mobile';
class My extends React.Component{
    render(){
        const setList = [{
            title: "我赞过的",
            icon: "z",
        },{
            title: "我的收藏",
            icon: "x",
        },
            {
                title: "已认证(设计师)",
                icon: "r",
            },
            {
                title: "设置",
                icon: "s",
            }

        ]
        const Item = List.Item;
        const Brief = Item.Brief;
        return(
              <div>
                  <Head></Head>
                  {setList.map(v=>(
                      <List>
                          <Item
                              thumb={require(`./img/${v.icon}.png`)}
                              arrow="horizontal"
                              onClick={() => {}}
                          >{v.title}</Item>
                         
                      </List>

                  ))}
              </div>
        )
    }
}
export default My