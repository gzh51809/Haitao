import React from 'react';

import '../style/cart/top.css';

class Top extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        let {show,edit,setEdit} = this.props;
        return (
            <div className="top">
                <div className="left"></div>
                <div className="center">购物车</div>
                <div className="right" onClick={setEdit}>
                    <div className={show?"":"hide"}>
                        <span className={edit ? "hide" : ""}>编辑</span>
                        <span className={edit ? "" : "hide"}>完成</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Top;