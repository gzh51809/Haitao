import React from 'react';
import { Icon } from 'antd';

import '../style/footer.css'

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            list:[
                {
                    name: '首页',
                    path: '/home',
                    type: 'home'
                },
                {
                    name: '分类',
                    path: '/category',
                    type: 'bars'
                },
                {
                    name: '购物车',
                    path: '/cart',
                    type: 'shopping-cart'
                },
                {
                    name: '我的',
                    path: '/my',
                    type: 'user'
                }
            ],
            current: '/home'
        }
    }
    goto(path){
        this.props.props.history.push(path);
        
        let hash = window.location.hash;
        hash = hash.split('/')[1];
        this.setState({
            current: '/' + hash
        })
    }
    componentDidMount() {
          
    }
    render() {
        return (
            <div className="foot">
            {
                this.state.list.map((item,index)=>{
                    return <div key={index} 
                            className={this.state.current===item.path?"active":""}
                            onClick={this.goto.bind(this,item.path)}>
                                <Icon type={item.type} />
                                <span>{item.name}</span>
                            </div>
                })
            }
            </div>
        )
    }
}

export default Footer;