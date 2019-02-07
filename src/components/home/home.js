import React from 'react';
import { Icon } from 'antd';

import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
// import fetch from 'fetch';
import Topsearch from '../common/topsearch';
import Arrival from './arrival';
import Mother from './mother';

import '../style/home/home.css';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            // 新品上市
            listNewArrive:[
                {
                ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/2886cba4-b9ff-4659-87a0-9abd99f4048b.jpg",
                Name: "【包邮包税】thisworks助眠旅行套装50ml",
                Price: 57.59,
                OldPrice: 69.16
                }, {
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/df270ab6-aa08-41f0-9e47-5ba145836c8b.jpg",
                    Name: "【包邮包税】安娜贝尔卡摩尔有机香蕉蓝莓椰奶果泥100g+ 香蕉香梨桃子果泥100g + 西梅苹果香梨果泥100g + 草莓香蕉椰奶果泥100g + 婴儿意面250g",
                    Price: 13.57,
                    OldPrice: 16.29
                }, {
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/aba90855-247a-4182-8c45-ad8af76b39a5.jpg",
                    Name: "HAWKINS&BRIMBLE控油保湿霜100ml",
                    Price: 10.99,
                    OldPrice: 14.95
                }, {
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/39661c59-e806-470a-980b-ec0ce611695f.jpg",
                    Name: "【包邮包税】thisworks抗皱极润保湿霜48ml",
                    Price: 54.18,
                    OldPrice: 46
                }, {
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/76059428-ed5e-41c3-8e37-cd230ec0799d.jpg",
                    Name: "【包邮包税】waitrose2019新年大礼包3号",
                    Price: 20.07,
                    OldPrice: 24.08
                }, {
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/4e112069-f0e3-4bc0-8327-34d51dc9f793.jpg",
                    Name: "【包邮包税】Lilycharmed金色生肖猪手链HappyChineseNewYear",
                    Price: 38.85,
                    OldPrice: 40
                }, {
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/374ed729-8a5c-4180-be1b-48413d6b99d0.jpg",
                    Name: "【包邮包税】BetterYou复合维生素口服喷雾儿童版25ml",
                    Price: 12.71,
                    OldPrice: 15.25
                }, {
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/b3712b22-0e68-478a-b7ab-d328d6c0f49e.jpg",
                    Name: "SCRUBBINGTONS走珠止汗液50ml",
                    Price: 2.99,
                    OldPrice: 3.99
                }
            ],
            listHomeCategory:[
                {
                Name: "母婴用品",
                TopProductList:[
                    {
                        ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/6b2953ea-f2e7-4050-a2f6-411948892aae.jpg",
                        Name: "Sudocrem 屁屁乐 护臀膏 屁屁霜&清洁毛孔面膜  400g",
                        SpecialPrice: 7.2,
                        OldPrice: 7.99
                    },{
                        ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/ee5f3f12-ab9b-42a9-85c8-49e56badb32d.jpg",
                        Name: "爱他美婴儿辅食黄金双歧因子 有机纯米糊米粉 4-6个月 100g",
                        SpecialPrice: 2.09,
                        OldPrice: 2.7
                    }, {
                        ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/e9b45b3e-f127-4c3f-9ea9-09a474f530af.jpg",
                        Name: "【包邮包税】Waitrose婴儿按摩精油125mlX2",
                        SpecialPrice: 8.99,
                        OldPrice: 10.8
                    }, {
                        ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/25d42767-8f53-471d-a489-b748c1f1a60e.jpg",
                        Name: "Organix小食苹果米饼50g",
                        SpecialPrice: 1.35,
                        OldPrice: 1.99
                    }, {
                        ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/eeea223a-044a-441e-9436-fdd78e9425b8.jpg",
                        Name: "【包邮包税】Osteocare液体钙200ml 5瓶装",
                        SpecialPrice: 23.61,
                        OldPrice: 49
                    }, {
                        ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/c3034016-00f6-484d-aeaa-161be9a7bc1b.jpg",
                        Name: "Organix小食香蕉米饼50g",
                        SpecialPrice: 1.35,
                        OldPrice: 1.5
                    }, {
                        ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/24455260-3bff-4f4e-a7e7-b0c4cdacc195.jpg",
                        Name: "Organix小食樱桃米饼50g",
                        SpecialPrice: 1.35,
                        OldPrice: 1.99
                    }, {
                        ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/db2afd20-570f-4260-bb35-aa3cdc4b6e45.jpg",
                        Name: "Organix草莓香蕉米糊120g",
                        SpecialPrice: 1.99,
                        OldPrice: 2.3
                    }, {
                        ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/6694c138-ddff-4f3e-8876-47368cd8c534.jpg",
                        Name: "Organix香蕉李子米糊200g",
                        SpecialPrice: 2.35,
                        OldPrice: 2.6
                    }, {
                        ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/e0262b5d-991a-49a4-833b-e88f84db6deb.jpg",
                        Name: "Organix好食迷你芝士饼干80g",
                        SpecialPrice: 3.99,
                        OldPrice: 2.25
                    }
                ]   
                },{
                    Name: "营养保健",
                    TopProductList:[
                        {
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/43b5fe0c-cfb9-4fb7-99df-5dc6fd697621.jpg",
                            Name: "Floradix iron铁元补铁补血 500ml",
                            SpecialPrice: 10.88,
                            OldPrice: 12.07
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/470b41f1-dd33-42da-98a6-1778baafdf34.jpg",
                            Name: "HOLLAND & BARRETT 美容养颜紧致水解胶原蛋白营养片 180粒/瓶",
                            SpecialPrice: 12.28,
                            OldPrice: 25.59
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/1b58e030-0a50-4a76-bb2a-8b1a3738da87.jpg",
                            Name: "HOLLAND & BARRETT 月见草精华胶囊 1000mg 120粒",
                            SpecialPrice: 9.8,
                            OldPrice: 19.99
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/6ebe2e90-70c4-45b4-86f2-b356e2d0044c.jpg",
                            Name: "【包邮包税】HOLLAND & BARRETT 月见草精华胶囊 1000mg 120粒X2",
                            SpecialPrice: 26.11,
                            OldPrice: 39.98
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/c186352e-9d62-49d3-9603-e808a9ac42e9.jpg",
                            Name: "【包邮包税】HOLLAND & BARRETT 月见草精华胶囊 1000mg 120粒X3",
                            SpecialPrice: 37.95,
                            OldPrice: 59.97
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/2a12ba40-d665-4cbb-9646-86e7ebbabff8.jpg",
                            Name: "【包邮包税】HOLLAND & BARRETT 維他命C添加野玫瑰果 100粒X2",
                            SpecialPrice: 12.74,
                            OldPrice: 15.98
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/a0cc5bdc-2650-4ece-bddc-1548e905255d.jpg",
                            Name: "【包邮包税】HOLLAND & BARRETT 蓝莓叶黄素护眼软胶囊保护视力缓解疲劳  60粒X2",
                            SpecialPrice: 16.87,
                            OldPrice: 22.58
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/4c2cbe22-3e37-4caa-bb6a-e8c1edc620d5.jpg",
                            Name: "【包邮包税】Floradix iron铁元补铁补血 500mlX2",
                            SpecialPrice: 37.05,
                            OldPrice: 45.2
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/c2c1b72a-7266-4945-a9e7-9e2451ac340d.jpg",
                            Name: "【包邮包税】Bepanthen 拜耳 宝宝护臀霜尿布红疹膏100gX2",
                            SpecialPrice: 19.15,
                            OldPrice: 30
                        },{
                            ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/1425f656-1968-495f-b9ab-dcb461b71374.jpg",
                            Name: "【包邮包税】HOLLAND & BARRETT 大蒜油2000毫克250粒X2",
                            SpecialPrice: 16.6,
                            OldPrice: 20
                        }
                    ]
                }
            ]
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
                <Topsearch></Topsearch>
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