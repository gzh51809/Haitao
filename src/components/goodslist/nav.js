import React from 'react';

import '../style/goodslist/nav.css';

class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            postage:false,
            buy:false,
            special:false,
        }
        this.postage = this.postage.bind(this);
        this.buy = this.buy.bind(this);
        this.special = this.special.bind(this);
    }
    postage(){
        this.setState({
            postage:!this.state.postage
        })
    }
    buy(){
        this.setState({
            buy: !this.state.buy
        })
    }
    special(){
        this.setState({
            special: !this.state.special
        })
    }
    render() {
        return (
            <div className="nav">
                <div className="nav-l">
                    <div className="l-item active">
                        <span>销量</span>
                        <div><img alt="" src="../../assets/arrow_up@3x.png" /></div>
                    </div>
                    <div className="l-item">
                        <span>新品</span>
                        <div></div>
                    </div>
                    <div className="l-item">
                        <span>价格</span>
                        <div></div>
                    </div>
                </div>
                <div className="nav-r">
                    <div className="r-item">
                        <div 
                        className={this.state.postage?"active":""} 
                        onClick={this.postage}
                        ><span>包邮</span></div>
                    </div>
                    <div className="r-item">
                        <div 
                        className={this.state.buy ? "active" : ""} 
                        onClick={this.buy}
                        ><span>0元购</span></div>
                    </div>
                    <div className="r-item">
                        <div 
                        className={this.state.special ? "active" : ""} 
                        onClick={this.special}
                        ><span>特价</span></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Nav;