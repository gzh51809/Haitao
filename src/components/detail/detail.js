import React from 'react';
import { Badge,Icon, Carousel } from 'antd';
import axios from 'axios';

import '../style/detail/detail.css';

import Buygoods from './buy';

class Detail extends React.Component {
    constructor() {
        super();
        this.state = {
            topBtn:[{name:"商品",id:"img"},{name:"详情",id:"detail"}],
            show:0,
            data:[{
                ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/1a1b78de-4edb-4522-b874-3b99ce5cbdbb.jpg",
                Name: "英国原装爱他美 白金版 1段 0-6个月 奶粉800G",
                ProductEnglishName: "Aptamil Profutura First Infant milk From birth 800g",
                Id: 254708,
                Price: 13.99,
                OldPrice: 19.99,
                FullDescription: '<p><img title="白金版爱他美1段描述_01.jpg" align="absmiddle" style="" src="https://resource.51taouk.com/AdminImages/Editor/6/201710276364473414142256968820764.jpg"/><img title="白金版爱他美1段描述_02.jpg" align="absmiddle" style="" src="https://resource.51taouk.com/AdminImages/Editor/6/201710276364473414874868292815085.jpg"/><img title="白金版爱他美1段描述_03.jpg" align="absmiddle" style="" src="https://resource.51taouk.com/AdminImages/Editor/6/201710276364473414222342363177543.jpg"/><img title="白金版爱他美1段描述_04.jpg" align="absmiddle" style="" src="https://resource.51taouk.com/AdminImages/Editor/6/201710276364473414270769331862211.jpg"/><img title="白金版爱他美1段描述_05.jpg" align="absmiddle" style="" src="https://resource.51taouk.com/AdminImages/Editor/6/201710276364473414325849188762033.jpg"/><img title="白金版爱他美1段描述_06.jpg" align="absmiddle" style="" src="https://resource.51taouk.com/AdminImages/Editor/6/201710276364473414378389073432609.jpg"/><img title="白金版爱他美1段描述_07.jpg" align="absmiddle" style="" src="https://resource.51taouk.com/AdminImages/Editor/6/201710276364473414429558648575769.jpg"/><img title="白金版爱他美1段描述_08.jpg" align="absmiddle" style="" src="https://resource.51taouk.com/AdminImages/Editor/6/201710276364473414483661613246345.jpg"/><img title="白金版爱他美1段描述_09.jpg" align="absmiddle" style="" src="https://resource.51taouk.com/AdminImages/Editor/6/201710276364473414535808436916922.jpg"/><img title="白金版爱他美1段描述_10.jpg" align="absmiddle" style="" src="https://resource.51taouk.com/AdminImages/Editor/6/201710276364473414800163794444215.jpg"/><img title="白金版爱他美1段描述_11.jpg" align="absmiddle" style="" src="https://resource.51taouk.com/AdminImages/Editor/6/201710276364473414585418871303418.jpg"/><img title="白金版爱他美1段描述_12.jpg" align="absmiddle" style="" src="https://resource.51taouk.com/AdminImages/Editor/6/201710276364473414636786161744749.jpg"/><img title="白金版爱他美1段描述_13.jpg" align="absmiddle" style="" src="https://resource.51taouk.com/AdminImages/Editor/6/201710276364473414692351882873816.jpg"/><img title="白金版爱他美1段描述_14.jpg" align="absmiddle" style="" src="https://resource.51taouk.com/AdminImages/Editor/6/201710276364473414747724319773638.jpg"/></p><p><br/></p>'
            }],
            getInitialState: function () {
                return { html: this.state.data[0].FullDescription };
            },
            RelatedProducts:[
                {
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/4aee76c5-1281-438b-9c63-168331b405c7.jpg",
                    ProductName: "【包邮包税】2罐 英国原装爱他美 白金版 1段 0-6个月 奶粉800G",
                    Id: 254696,
                    Price: 48
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/a84a8ee6-48c8-4797-8835-166afd90b954.jpg",
                    ProductName: "【包邮包税】4罐 英国原装爱他美 白金版 1段 0-6个月 奶粉800G",
                    Id: 254697,
                    Price: 96
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/d91322e0-1a14-4f45-90d5-08359709001f.jpg",
                    ProductName: "【包邮包税】6罐 英国原装爱他美 白金版 1段 0-6个月 奶粉800G",
                    Id: 254698,
                    Price: 144
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/10192a82-07ff-45c9-9daf-3eebdb87ee82.jpg",
                    ProductName: "英国原装爱他美 白金版 2段 6-12个月 奶粉800G",
                    Price: 12.99
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/8a1bdfb0-bfef-4df7-9da2-558c4c3b9844.jpg",
                    ProductName: "【包邮包税】2罐 英国原装爱他美 白金版 2段 6-12个月 奶粉800G",
                    Price: 50
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/2ae08a10-5420-438c-9d85-2440213e8751.jpg",
                    ProductName: "【包邮包税】4罐 英国原装爱他美 白金版 2段 6-12个月 奶粉800G",
                    Price: 96
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/f659c903-b05a-4bec-8a4b-49f88940a690.jpg",
                    ProductName: "【包邮包税】6罐 英国原装爱他美 白金版 2段 6-12个月 奶粉800G",
                    Price: 144  
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/524c679f-aba4-4775-b68a-75823538075c.jpg",
                    ProductName: "英国原装爱他美 白金版 3段 1-2岁 奶粉800G",
                    Price: 13.99
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/8561eac4-4406-4115-aced-b53c70647055.jpg",
                    ProductName: "【包邮包税】2罐 英国原装爱他美 白金版 3段 1-2岁 奶粉800G",
                    Price: 50
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/d9c7dea8-3ffb-4e8e-9685-405932760a92.jpg",
                    ProductName: "【包邮包税】4罐 英国原装爱他美 白金版 3段 1-2岁 奶粉800G",
                    Price: 96
                }
            ],
            buygoods:false,
            ProductVariants:[
                {
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/1a1b78de-4edb-4522-b874-3b99ce5cbdbb.jpg",
                    Name: "一罐装",
                    ProductId: 254708,
                    OldPrice: 19.99,
                    Price: 13.99
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/4aee76c5-1281-438b-9c63-168331b405c7.jpg",
                    Name: "二罐装",
                    ProductId: 254696,
                    OldPrice: 49,
                    Price: 48
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/a84a8ee6-48c8-4797-8835-166afd90b954.jpg",
                    Name: "四罐装",
                    ProductId: 254697,
                    OldPrice: 110,
                    Price: 96
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/d91322e0-1a14-4f45-90d5-08359709001f.jpg",
                    Name: "六罐装",
                    ProductId: 254698,
                    OldPrice: 160,
                    Price: 144
                }
            ],
            allnum: 0
        }
        this.buychange = this.buychange.bind(this);
        this.getallnum = this.getallnum.bind(this);
    }
    back(){
        this.props.history.goBack();
    }
    gotoCart(){
        this.props.history.push('/cart');
    }
    change(index){
        this.setState({
            show:index
        })
    }
    buychange(){
        this.setState({
            buygoods: !this.state.buygoods
        })
    }
    getallnum(num) {
        this.setState({
            allnum: num
        })
    }
    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
        }
    }
    componentDidMount() {
        // axios.get('https://webapi.51taouk.com/api/product/GetProductBySeoName/APTDAP1',{
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'platform': 'h5',
        //         'token': 'VH2Ha5utRXwBYAdTG4zd6nAno9akuVw6 + h / DQIqGWtd6bQB8s1q0o8CYuYK5rDQehVVIvwDY9B0CKl2S06WhCWOTN / G1Lb8rTQkDvODFGRxYHDzX / CwlRmKzGZiLIrgPmamnNekkD24ypb4m3DKSHA =='
        //     }
        // })
        // .then((res)=>{
        //     console.log(res.data);
        // })
        // .catch((err)=>{
        //     console.log(err);
        // })
    }
    render() {
        return (
            <div className="detail">
                <div className="d-top">
                    <div className="d-l" onClick={this.back.bind(this)}><Icon type="left" /></div>
                    <div className="d-c">
                        <div className="d-cc">
                        {
                            this.state.topBtn.map((item,index)=>{
                                return (
                                    <div 
                                    className={this.state.show === index ? "active" : ""}
                                    key={index}
                                    onClick={this.change.bind(this,index)}
                                    >
                                        <a onClick={() => this.scrollToAnchor(item.id)}><span>{item.name}</span></a>
                                    </div>
                                )
                            })
                        }
                            {/* <div className={this.state.show===1?"active":""}><span>商品</span></div>
                            <div className={this.state.show===2?"active":""}><span>详情</span></div> */}
                        </div>
                    </div>
                    <div className="d-l" onClick={this.gotoCart.bind(this)}>
                        <Icon type="shopping-cart" />
                        <Badge count={this.state.allnum} style={{ minWidth: '16px',height:'16px',lineHeight:'16px' }} />
                    </div>
                </div>
                <div className="d-center">
                    <div className="d-img" id="img">
                        <img alt="" src="https://resource.51taouk.com/AdminImages/Product/6/1a1b78de-4edb-4522-b874-3b99ce5cbdbb.jpg" />
                    </div>
                    <div className="d-text">
                        {
                            this.state.data.map((item,index)=>{
                                return (
                                    <div className="d-text-h" key={index}>
                                        <div className="d-name">
                                            <div className="chinese">{item.Name}</div>
                                            <div className="english">{item.ProductEnglishName}</div>
                                        </div>
                                        <div className="d-price">
                                            <span className="now">￡{item.Price}</span>
                                            <span className="del"><del>￡{item.OldPrice}</del></span>
                                        </div>
                                        <div className="fuwu">
                                            <span>服务: </span>
                                            <div className="pin"><img alt="" src="https://m.51taouk.com/static/images/icon_flag_good_product@3x.png" /></div>
                                            <span>正品保障</span>
                                            <div className="pin"><img alt="" src="https://m.51taouk.com/static/images/icon_flag_english_shipment@3x.png" /></div>
                                            <span>英国直邮</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="recom">
                            <div className="kong"></div>
                            <div className="r-con">
                                <div className="r-con-t"><span>为您推荐</span></div>
                                <div className="r-con-c">
                                {
                                    // this.state.RelatedProducts.map((item,index)=>{
                                    //     let arr = [];
                                    //     let data = [];
                                    //     if(index<3){
                                    //         data.push(item);
                                    //         arr[0].data=data;
                                    //     }
                                    //     if(index<6&&index>3){

                                    //     }
                                    //     return (
                                    //         <Carousel key={index}>
                                    //             <div>
                                    //                 <div className="r-items">
                                    //                     <div className="r-item">
                                    //                         <div className="itemImg">
                                    //                             <img alt="" src="https://resource.51taouk.com/AdminImages/Product/6/4aee76c5-1281-438b-9c63-168331b405c7.jpg" />
                                    //                         </div>
                                    //                         <p>【包邮包税】2罐 英国原装爱他美 白金版 1段 0-6个月 奶粉800G</p>
                                    //                         <div className="price">￡<span>48.00</span></div>
                                    //                     </div>
                                    //                 </div>
                                    //             </div>
                                    //             <div>
                                    //                 <div className="r-items">
                                    //                     <div className="r-item">
                                    //                         <div className="itemImg">
                                    //                             <img alt="" src="https://resource.51taouk.com/AdminImages/Product/6/4aee76c5-1281-438b-9c63-168331b405c7.jpg" />
                                    //                         </div>
                                    //                         <p>【包邮包税】2罐 英国原装爱他美 白金版 1段 0-6个月 奶粉800G</p>
                                    //                         <div className="price">￡<span>48.00</span></div>
                                    //                     </div>
                                    //                     <div className="r-item">
                                    //                         <div className="itemImg">
                                    //                             <img alt="" src="https://resource.51taouk.com/AdminImages/Product/6/4aee76c5-1281-438b-9c63-168331b405c7.jpg" />
                                    //                         </div>
                                    //                         <p>【包邮包税】2罐 英国原装爱他美 白金版 1段 0-6个月 奶粉800G</p>
                                    //                         <div className="price">￡<span>48.00</span></div>
                                    //                     </div>
                                    //                     <div className="r-item">
                                    //                         <div className="itemImg">
                                    //                             <img alt="" src="https://resource.51taouk.com/AdminImages/Product/6/4aee76c5-1281-438b-9c63-168331b405c7.jpg" />
                                    //                         </div>
                                    //                         <p>【包邮包税】2罐 英国原装爱他美 白金版 1段 0-6个月 奶粉800G</p>
                                    //                         <div className="price">￡<span>48.00</span></div>
                                    //                     </div>
                                    //                 </div>
                                    //             </div>
                                    //         </Carousel>
                                    //     )
                                    // })
                                }
                                    <Carousel>
                                        <div>
                                            <div className="r-items">
                                                <div className="r-item">
                                                    <div className="itemImg">
                                                        <img alt="" src="https://resource.51taouk.com/AdminImages/Product/6/4aee76c5-1281-438b-9c63-168331b405c7.jpg" />
                                                    </div>
                                                    <p>【包邮包税】2罐 英国原装爱他美 白金版 1段 0-6个月 奶粉800G</p>
                                                    <div className="price">￡<span>48.00</span></div>
                                                </div>
                                                <div className="r-item">
                                                    <div className="itemImg">
                                                        <img alt="" src="https://resource.51taouk.com/AdminImages/Product/6/4aee76c5-1281-438b-9c63-168331b405c7.jpg" />
                                                    </div>
                                                    <p>【包邮包税】2罐 英国原装爱他美 白金版 1段 0-6个月 奶粉800G</p>
                                                    <div className="price">￡<span>48.00</span></div>
                                                </div>
                                                <div className="r-item">
                                                    <div className="itemImg">
                                                        <img alt="" src="https://resource.51taouk.com/AdminImages/Product/6/4aee76c5-1281-438b-9c63-168331b405c7.jpg" />
                                                    </div>
                                                    <p>【包邮包税】2罐 英国原装爱他美 白金版 1段 0-6个月 奶粉800G</p>
                                                    <div className="price">￡<span>48.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                        <div className="g-deta" id="detail">
                            <div className="kong"></div>
                            <div className="g-t"><span>商品详情</span></div>
                            {
                                this.state.data.map((item,index)=>{
                                    let contentHtml = <article id='contentHtml' dangerouslySetInnerHTML={{ __html: item.FullDescription }}></article>;
                                    return (
                                        <div className="g-img" key={index}>
                                            {contentHtml}
                                        </div>
                                    )
                                })  
                            }
                        </div>
                        <div className="end">
                            <div className="one"></div>
                            <span>已经到底了</span>
                            <div className="two"></div>
                        </div>
                    </div>
                </div>
                <div className="d-foot">
                    <div className="buy">
                        <div className="b-btn"><span>立即购买</span></div>
                    </div>
                    <div className="addCart">
                        <div className="c-btn" onClick={this.buychange}><span>加入购物车</span></div>
                    </div>
                </div>
                {
                    <div className={this.state.buygoods ? "" : "hide"}>
                        <Buygoods 
                        buychange={this.buychange} 
                        getallnum={this.getallnum}
                        firstgoods={this.state.data} 
                        related={this.state.RelatedProducts} 
                        variants={this.state.ProductVariants} 
                        ></Buygoods>
                    </div>
                }
            </div>
        )
    }
}
export default Detail;