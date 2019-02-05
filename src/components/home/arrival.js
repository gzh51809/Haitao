import React from 'react';
import { Icon } from 'antd';

import '../style/home/arrival.css';

class Arrival extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className="hot">
                <div className="title">
                    <Icon type="trophy" theme="filled" style={{ color: '#98d25e' }} />
                    <span>新品上市</span>
                    <div>最新流行抢先知道</div>
                </div>
                <img src="https://resource.51taouk.com/AdminImages/Content1/1/62d9a5a4-2dd5-48d8-b20e-248535f26cf5.png?imageMogr2/format/webp/thumbnail/x536" />
                <div className="products">
                    <div className="item">
                        <div className="productImg">
                            <img src="https://resource.51taouk.com/AdminImages/Product/6/2886cba4-b9ff-4659-87a0-9abd99f4048b.jpg" />
                        </div>
                        <p className="text">【包邮包税】thisworks助眠旅行套装50ml</p>
                        <p className="price">
                            <span className="active">￥</span><span className="active">57.59</span>
                            <span className="del"><del>￥69.16</del></span>
                        </p>
                    </div>
                    <div className="item">
                        <div className="productImg">
                            <img src="https://resource.51taouk.com/AdminImages/Product/6/df270ab6-aa08-41f0-9e47-5ba145836c8b.jpg" />
                        </div>
                        <p className="text">【包邮包税】安娜贝尔卡摩尔有机香蕉蓝莓椰奶果泥100g+香蕉香梨桃子果泥100g+西梅苹果香梨果泥100g+草莓香蕉椰奶果泥100g+婴儿意面250g</p>
                        <p className="price">
                            <span className="active">￥</span><span className="active">14.01</span>
                            <span className="del"><del>￥15.85</del></span>
                        </p>
                    </div>
                    <div className="item">
                        <div className="productImg">
                            <img src="https://resource.51taouk.com/AdminImages/Product/6/aba90855-247a-4182-8c45-ad8af76b39a5.jpg" />
                        </div>
                        <p className="text">HAWKINS&BRIMBLE控油保湿霜100ml</p>
                        <p className="price">
                            <span className="active">￥</span><span className="active">10.99</span>
                            <span className="del"><del>￥14.95</del></span>
                        </p>
                    </div>
                    <div className="item">
                        <div className="productImg">
                            <img src="https://resource.51taouk.com/AdminImages/Product/6/39661c59-e806-470a-980b-ec0ce611695f.jpg" />
                        </div>
                        <p className="text">【包邮包税】thisworks抗皱极润保湿霜48ml</p>
                        <p className="price">
                            <span className="active">￥</span><span className="active">54.18</span>
                            <span className="del"><del>￥46.00</del></span>
                        </p>
                    </div>
                    <div className="item">
                        <div className="productImg">
                            <img src="https://resource.51taouk.com/AdminImages/Product/6/a708e4a2-befc-4c71-b9dc-f53134730e04.jpg" />
                        </div>
                        <p className="text">NATURES BEST养颜片60片</p>
                        <p className="price">
                            <span className="active">￥</span><span className="active">14.58</span>
                            <span className="del"><del>￥18.95</del></span>
                        </p>
                    </div>
                    <div className="item">
                        <div className="productImg">
                            <img src="https://resource.51taouk.com/AdminImages/Product/6/76059428-ed5e-41c3-8e37-cd230ec0799d.jpg" />
                        </div>
                        <p className="text">【包邮包税】waitrose2019新年大礼包3号</p>
                        <p className="price">
                            <span className="active">￥</span><span className="active">20.07</span>
                            <span className="del"><del>￥24.08</del></span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Arrival;