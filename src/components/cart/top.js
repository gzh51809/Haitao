import React from 'react';

import '../style/cart/top.css';

class Top extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className="top">
                <div className="left"></div>
                <div className="center">购物车</div>
                <div className="right">
                    <div className={this.props.show?"":"hide"}>编辑</div>
                </div>
            </div>
        )
    }
}

export default Top;