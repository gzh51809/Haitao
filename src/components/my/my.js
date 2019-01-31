import React from 'react';
import { Icon } from 'antd';

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
                <div className="order com">
                    <div className="order-top">
                        <span>商城订单</span>
                        <p>查看全部订单 <Icon type="right" /></p>
                    </div>
                    <div className="order-center">
                        <div><Icon type="money-collect" /><span>待付款</span></div>
                        <div><Icon type="dropbox" /><span>待发货</span></div>
                        <div><Icon type="code-sandbox" /><span>已发货</span></div>
                        <div><Icon type="inbox" /><span>已寄到</span></div>
                    </div>
                </div>
                {/* 转运 */}
                <div className="transfer com com2">
                    <div>
                        <Icon type="dribbble" />
                        <span>我的转运</span>
                        <p>查看海淘转运订单 <Icon type="right" /></p>
                    </div>
                </div>
                {/* 发货 */}
                <div className="shipments com com2">
                    <div>
                        <Icon type="dribbble" />
                        <span>我要发货</span>
                        <p>创建订单 <Icon type="right" /></p>
                    </div>
                </div>
                <div className="news com com2">
                    <div className="br message">
                        <Icon type="solution" />
                        <span>常用信息</span>
                        <p>收件人地址 <Icon type="right" /></p>
                    </div>
                    <div className="br discount">
                        <Icon type="tag" />
                        <span>优惠券</span>
                        <p>无可用优惠券 <Icon type="right" /></p></div>
                    <div className="br money">
                        <Icon type="pay-circle" />
                        <span>我的余额</span>
                        <p>￥0.00 </p></div>
                    <div className="star">
                        <Icon type="star" />
                        <span>我的积分</span>
                        <p>0 <Icon type="right" /></p>
                    </div>
                </div>
                <div className="us com">
                    <p>关于我们</p>
                    <Icon type="right" />
                </div>
                <div className="end">
                    <p>51taouk v2.35.6578 </p>
                </div>
            </div>
        )
    }
}

export default My;