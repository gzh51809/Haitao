import React from 'react';

import '../style/category/header.css';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            list:['按分类','按品牌']
        }
    }
    render() {
        let {tabIs,changeTab} = this.props;
        return (
            <div className="header">
                <div className="tab">
                {
                    this.state.list.map((item,index)=>{
                        return <div 
                                className={tabIs===index?"active":""} 
                                key={index}
                                onClick={()=>{changeTab(index)}}
                                >{item}</div>
                    })
                }
                </div>
            </div>
        )
    }
}

export default Header;