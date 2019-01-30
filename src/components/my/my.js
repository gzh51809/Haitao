import React from 'react';

import '../style/my/my.css';

class My extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className="user">
                <div className="mytop">
                    <img className="bg" alt="" src="https://m.51taouk.com/static/images/watermark_myaccount_header@3x.png" />
                    <div className="head">
                        <div>
                            <img alt="" src="https://m.51taouk.com/static/images/default_head@3x.png" />
                        </div>
                    </div>
                    <span>登录/注册</span>
                </div>
                <div className="order com"></div>
                {/* 转运 */}
                <div className="transfer com"></div>
                {/* 发货 */}
                <div className="shipments com"></div>
                <div className="news com"></div>
                <div className="us com"></div>
                <div className="end"></div>
            </div>
        )
    }
}

export default My;