import React from 'react';

import '../style/footer.css'

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            list:[
                {
                    name: '首页',
                    path: '/home'
                },
                {
                    name: '分类',
                    path: '/category'
                },
                {
                    name: '购物车',
                    path: '/cart'
                },
                {
                    name: '我的',
                    path: '/my'
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
                                <span>{item.name}</span>
                                <span>{item.name}</span>
                            </div>
                })
            }
            </div>
        )
    }
}

export default Footer;