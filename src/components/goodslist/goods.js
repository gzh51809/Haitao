import React from 'react';

import '../style/goodslist/goods.css';

class Goods extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    goto(path){
        this.props.props.history.push(path);
    }
    render() {
        let { list } = this.props;
        return (
            <div className="goods">
            {
                list.map((item,index)=>{
                    return (
                        <div className="items" key={index} onClick={this.goto.bind(this,'/detail/APTDAP1')}>
                            <div className="goodsImg">
                                <img alt="" src={item.ImageUrl} />
                            </div>
                            <div className="goodsCon">
                                <div className="goodsName">{item.Name}</div>
                                <div className="goodsPrice">
                                    <span className="active">￡</span><span className="active">{item.Price}</span>
                                    <span className="del"><del>￡{item.OldPrice}</del></span>
                                </div>
                            </div>
                            <div className={item.IsFreeShipping?"bao":"hide"}>
                                <img alt="" src="https://m.51taouk.com/static/images/icon_green_flag_shadow@3x.png" />
                                <div>包邮包税</div>
                            </div>
                        </div> 
                    )
                })
            }
                {/* <div className="items">
                    <div className="goodsImg">
                        <img alt="" src="https://resource.51taouk.com/AdminImages/Product/6/ee5f3f12-ab9b-42a9-85c8-49e56badb32d.jpg" />
                    </div>
                    <div className="goodsCon">
                        <div className="goodsName">爱他美婴儿辅食黄金双歧因子 有机纯米糊米粉 4-6个月 100g</div>
                        <div className="goodsPrice">
                            <span className="active">￡</span><span className="active">2.09</span>
                            <span className="del"><del>￡2.70</del></span>
                        </div>
                    </div>
                </div>
                <div className="items">
                    <div className="goodsImg">
                        <img alt="" src="https://resource.51taouk.com/AdminImages/Product/6/a23deb3b-5c7c-4599-a088-bbf7fe7b7956.jpg" />
                    </div>
                    <div className="goodsCon">
                        <div className="goodsName">【包邮包税】爱他美婴儿辅食黄金双歧因子 有机纯米糊米粉 4-6个月 100g x4</div>
                        <div className="goodsPrice">
                            <span className="active">￡</span><span className="active">17.99</span>
                            <span className="del"><del>￡19.99</del></span>
                        </div>
                    </div>
                    <div className="bao">
                        <img alt="" src="https://m.51taouk.com/static/images/icon_green_flag_shadow@3x.png" />
                        <div>包邮包税</div>
                    </div>
                </div> */}
            </div>
        )
    }
}
export default Goods;