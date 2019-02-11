import React from 'react';

import '../style/goodslist/nav.css';

class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
        }
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
                        <div className="active"><span>包邮</span></div>
                    </div>
                    <div className="r-item">
                        <div><span>0元购</span></div>
                    </div>
                    <div className="r-item">
                        <div><span>特价</span></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Nav;