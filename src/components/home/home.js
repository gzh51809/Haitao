import React from 'react';
import { Icon } from 'antd';

import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
// import fetch from 'fetch';
import Arrival from './arrival';
import Mother from './mother';

import '../style/home/home.css';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    componentDidMount(){
        // axios.get('https://webapi.51taouk.com/api/content/getAllContentsByPage/app')
        // axios.get('../../../data/home.php')
        // .then((res)=>{
        //     console.log(res);
        // })
        // .catch((err)=>{
        //     console.log(err);
        // })
    }
    render(){
        return (
            <div className="home">
                <Carousel autoplay>
                    <div className="adver"><img alt="" src="https://resource.51taouk.com/AdminImages/Content1/1/09c396d3-cf84-4e9a-a8ba-ee237a0b98ba.jpg" /></div>
                    <div className="adver"><img alt="" src="https://resource.51taouk.com/AdminImages/Content1/1/8aa32839-80a5-4eca-8285-53f2d9cbe719.jpg" /></div>
                    <div className="adver"><img alt="" src="https://resource.51taouk.com/AdminImages/Content1/1/77043802-ae84-477d-9e67-53e637a38e12.jpg" /></div>
                </Carousel>
                <div className="timer">
                    <div className="limit">
                        <div className="title">
                            <Icon type="clock-circle" />
                            <span>限时抢购</span>
                            <div className="count">
                                <span>距离结束还剩&nbsp;</span>
                                <div className="down">
                                    <span>238</span> :&nbsp;
                                    <span>05</span> :&nbsp;
                                    <span>01</span> :&nbsp;
                                    <span>16</span>
                                </div>
                            </div>
                        </div>
                        <img alt="" src="https://resource.51taouk.com/AdminImages/Content1/1/26b4480b-e8f9-4433-bc41-3a357f967fd5.png?imageMogr2/format/webp/thumbnail/x536" />
                        <div className="rob">
                            <ul>
                                <li>
                                    <div className="img"><img src="https://resource.51taouk.com/AdminImages/Product/6/c186352e-9d62-49d3-9603-e808a9ac42e9.jpg?imageMogr2/format/webp/thumbnail/x200" /></div>
                                    <p className="text">【包邮包税】HOLLAND & BARRETT 月见草精华胶囊 1000mg 120粒X3</p>
                                    <p className="price">
                                        <span className="active">￥</span><span className="active">35.90</span>
                                        <span className="del"><del>￥59.97</del></span>
                                    </p>
                                    <div className="btn">立即抢</div>
                                </li>
                                <li>
                                    <div className="img"><img src="https://resource.51taouk.com/AdminImages/Product/6/c186352e-9d62-49d3-9603-e808a9ac42e9.jpg?imageMogr2/format/webp/thumbnail/x200" /></div>
                                    <p className="text">【包邮包税】HOLLAND & BARRETT 月见草精华胶囊 1000mg 120粒X3</p>
                                    <p className="price">
                                        <span className="active">￥</span><span className="active">35.90</span>
                                        <span className="del"><del>￥59.97</del></span>
                                    </p>
                                    <div className="btn">立即抢</div>
                                </li>
                                <li>
                                    <div className="img"><img src="https://resource.51taouk.com/AdminImages/Product/6/c186352e-9d62-49d3-9603-e808a9ac42e9.jpg?imageMogr2/format/webp/thumbnail/x200" /></div>
                                    <p className="text">【包邮包税】HOLLAND & BARRETT 月见草精华胶囊 1000mg 120粒X3</p>
                                    <p className="price">
                                        <span className="active">￥</span><span className="active">35.90</span>
                                        <span className="del"><del>￥59.97</del></span>
                                    </p>
                                    <div className="btn">立即抢</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="hot">
                    <div className="title">
                        <Icon type="trophy" theme="filled" style={{color:'#f6a623'}} />
                        <span>热销产品</span>
                        <div>英国好评明星产品</div>
                    </div>
                    <img src="https://resource.51taouk.com/AdminImages/Content1/1/5b00646c-d4ef-446b-8f19-94c4aaaaf144.png?imageMogr2/format/webp/thumbnail/x536" />
                    <div className="products">
                        <div className="item">
                            <div className="productImg">
                                <img src="https://resource.51taouk.com/AdminImages/Product/6/979a96f9-caca-4034-b55a-b25669b54f26.jpg" />
                            </div>
                            <p className="text">【包邮包税】MARVEL成人低脂奶粉340gX4</p>
                            <p className="price">
                                <span className="active">￥</span><span className="active">20.41</span>
                                <span className="del"><del>￥30.00</del></span>
                            </p>
                        </div>
                        <div className="item">
                            <div className="productImg">
                                <img src="https://resource.51taouk.com/AdminImages/Product/6/2ae08a10-5420-438c-9d85-2440213e8751.jpg" />
                            </div>
                            <p className="text">【包邮包税】4罐 英国原装爱他美 白金版 2段 6-12个月 奶粉800G</p>
                            <p className="price">
                                <span className="active">￥</span><span className="active">96.00</span>
                                <span className="del"><del>￥101.00</del></span>
                            </p>
                        </div>
                        <div className="item">
                            <div className="productImg">
                                <img src="https://resource.51taouk.com/AdminImages/Product/6/f659c903-b05a-4bec-8a4b-49f88940a690.jpg" />
                            </div>
                            <p className="text">【包邮包税】6罐 英国原装爱他美 白金版 2段 6-12个月 奶粉800G</p>
                            <p className="price">
                                <span className="active">￥</span><span className="active">144.00</span>
                                <span className="del"><del>￥149.00</del></span>
                            </p>
                        </div>
                        <div className="item">
                            <div className="productImg">
                                <img src="https://resource.51taouk.com/AdminImages/Product/6/09cba6ac-1519-4597-b365-0d2c3b32d6fc.jpg" />
                            </div>
                            <p className="text">【包邮包税】6罐 英国原装爱他美 白金版 3段 1-2岁 奶粉800G</p>
                            <p className="price">
                                <span className="active">￥</span><span className="active">144.00</span>
                                <span className="del"><del>￥160.00</del></span>
                            </p>
                        </div>
                        <div className="item">
                            <div className="productImg">
                                <img src="https://resource.51taouk.com/AdminImages/Product/6/d9c7dea8-3ffb-4e8e-9685-405932760a92.jpg" />
                            </div>
                            <p className="text">【包邮包税】4罐 英国原装爱他美 白金版 3段 1-2岁 奶粉800G</p>
                            <p className="price">
                                <span className="active">￥</span><span className="active">96.00</span>
                                <span className="del"><del>￥110.00</del></span>
                            </p>
                        </div>
                        <div className="item">
                            <div className="productImg">
                                <img src="https://resource.51taouk.com/AdminImages/Product/6/fc6ca253-9df7-4d40-80a1-9a30c91e809e.jpg" />
                            </div>
                            <p className="text">【包邮包税】ManukaPharm 70抗菌值麦卢卡蜂蜜250g</p>
                            <p className="price">
                                <span className="active">￥</span><span className="active">24.43</span>
                                <span className="del"><del>￥33.99</del></span>
                            </p>
                        </div>
                    </div>
                </div>
                <Arrival></Arrival>
                <Mother></Mother>
                <Mother></Mother>
                <Mother></Mother>
                <Mother></Mother>
                <Mother></Mother>
                <div className="end">
                    <div className="one"></div>
                    <span>没有更多了</span>
                    <div className="two"></div>
                </div>
            </div>
        )
    }
}

export default Home;