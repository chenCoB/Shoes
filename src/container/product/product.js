import Header from '../../component/header/header'
import React from 'react';
import './product.css'
class Product extends  React.Component{
    constructor(props){
        super(props);
        this.state = {
            arrImg:[
                {img:1,
                    name:"Nike*",
                    inster:"JSDFORMACJKSAKWUIASDWHAGFDUYWOA",
                    money:"99.00"
                },
                {img:2,
                    name:"Nike*",
                    inster:"JSDFORMACJKSAKWUIASDWHAGFDUYWOA",
                    money:"199.00"
                },
                {img:2,
                    name:"Nike*",
                    inster:"JSDFORMACJKSAKWUIASDWHAGFDUYWOA",
                    money:"199.00"
                },
                {img:2,
                    name:"Nike*",
                    inster:"JSDFORMACJKSAKWUIASDWHAGFDUYWOA",
                    money:"199.00"
                },
                {img:2,
                    name:"Nike*",
                    inster:"JSDFORMACJKSAKWUIASDWHAGFDUYWOA",
                    money:"199.00"
                },
                {img:2,
                    name:"Nike*",
                    inster:"JSDFORMACJKSAKWUIASDWHAGFDUYWOA",
                    money:"199.00"
                },
            ]
        }
    }
    render(){

        return(
            <div className="product">
                <Header></Header>
                <div className="product-content">
                    <ul>
                        {this.state.arrImg.map(v=>(
                            <li key={v.img}>
                                <img src={require(`./img/${v.img}.png`)} alt=""/>
                                <h2>{v.name} </h2>
                                <p>{v.inster}</p>
                                <i>${v.money}</i>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        )
    }

}
export default Product