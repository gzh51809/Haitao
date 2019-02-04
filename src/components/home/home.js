import React from 'react';
import { Icon } from 'antd';

import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
// import fetch from 'fetch';

import '../style/home.css';

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
                    <div className="products"></div>
                </div>
            </div>
        )
    }
}

export default Home;