import React from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';

import '../style/detail/buy.css';

class Buy extends React.Component {
    constructor() {
        super();
        this.state = {
            goods:0,
            num:1,
            goodsId: 254708
        }
    }
    changegoods(index,id){
        this.setState({
            goods:index,
            goodsId:id
        })
    }
    add(){
        this.setState({
            num:this.state.num+1
        })
    }
    subtract(){
        if (this.state.num>1){
            this.setState({
                num: this.state.num - 1
            })
        } 
    }
    componentDidMount() {
        this.setState({
            goodsId: this.props.firstgoods[0].Id
        })
    }
    render(){
        let { buychange, firstgoods, related, variants } = this.props;
        return (
            <div className="b-buy">
                <div className="bg"></div>
                <div className="b-content">
                    <div className="b-bg"></div> 
                    <div className="cancel" onClick={buychange}><Icon type="close" /></div>
                    <div className="b-con-top">
                    {
                        variants.map((item,index)=>{
                            if(index===this.state.goods){
                                return (
                                    <div className="b-img" key={index}>
                                        <div className="b-img-l">
                                            <div className="b-image">
                                                <div><img alt="" src={item.ImageUrl} /></div>
                                            </div>
                                        </div>
                                        <div className="b-img-r">
                                            <div className="price">￡{item.Price}</div>
                                            <div className="xuan">
                                                <div>您选择了:{item.Name}</div>
                                                <div>单独包装，不可和其他商品合并</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                        {/* <div className="b-img">
                            <div className="b-img-l">
                                <div className="b-image">
                                    <div><img alt="" src="https://resource.51taouk.com/AdminImages/Product/6/1a1b78de-4edb-4522-b874-3b99ce5cbdbb.jpg" /></div>
                                </div>
                            </div>
                            <div className="b-img-r">
                                <div className="price">￡13.99</div>
                                <div className="xuan">
                                    <div>您选择了:一罐装</div>
                                    <div>单独包装，不可和其他商品合并</div>
                                </div>
                            </div>
                        </div> */}
                        <div className="xian"></div>
                    </div>
                    <div className="b-con-foot">
                        <div className="b-foot-con">
                            <div className="b-foot-center">
                                <div className="size">
                                    <div className="size-t">
                                        <div className="size-text">选择规格</div>
                                        <div className="size-con">
                                        {
                                            variants.map((item,index)=>{
                                                return (
                                                    <div 
                                                    className={this.state.goods===index?"active":""}
                                                    key={index}
                                                        onClick={this.changegoods.bind(this, index, item.ProductId)}
                                                    >
                                                        <span>{item.Name}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                        </div> 
                                        <div className="size-message">单独包装，不可和其他商品合并</div>
                                    </div>
                                    <div className="xian"></div>
                                </div>
                                <div className="num">
                                    <div className="buy-num">
                                        <div className="num-l"><div>购买数量</div></div>
                                        <div className="num-r">
                                        {
                                            <div className="num-con">
                                                <div 
                                                className={this.state.num === 1 ? "subtract opa" :"subtract"}
                                                onClick={this.subtract.bind(this)}
                                                >
                                                    <img alt="" src="https://m.51taouk.com/static/images/decrement@3x.png" />
                                                </div>
                                                <div className="goodsnum">
                                                    <div>{this.state.num}</div>
                                                </div>
                                                <div className="add" onClick={this.add.bind(this)}>
                                                    <img alt="" src="https://m.51taouk.com/static/images/increment@3x.png" />
                                                </div>
                                            </div>
                                        }
                                            
                                        </div>
                                    </div>
                                    <div className="xian"></div>
                                </div>
                            </div>
                        </div>
                        <div className="b-foot-bm">
                            <div className="b-foot-btn" 
                            onClick={()=>{
                                if(this.state.goods==0){
                                    let goods = {
                                        id:firstgoods[0].Id,
                                        name: firstgoods[0].Name,
                                        price: firstgoods[0].Price,
                                        oldprice: firstgoods[0].OldPrice,
                                        qty:this.state.num
                                    }
                                    this.props.addCart(goods);
                                    buychange();
                                }else{
                                    let current = related.filter(item=>this.state.goodsId==item.Id);
                                    let goods = {
                                        id: current[0].Id,
                                        name: current[0].Name,
                                        price: current[0].Price,
                                        oldprice: current[0].Price,
                                        qty: this.state.num
                                    }
                                    this.props.addCart(goods);
                                    buychange();
                                }    
                            }}
                            >确定</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state, ownprops) {
    //state：redux中的state
    //ownprops: Cart组件自身的props
    console.log(state);
    return {
        //将state中购物车页面的goodslist数据映射到props，
        //Cart组件中通过props.data访问
        data: state.cart.cartlist
    }
}
function mapDispatchToProps(dispatch, ownprops) {
    // dispatch: redux中的dispatch方法
    // ownprops：同上
    console.log(ownprops);
    return {
        addCart: (goods) => dispatch({
				type:'addCart',
				payload:goods
			}),
        // onRemoveGoods: (action) => dispatch(action),
    }
}
Buy = connect(mapStateToProps, mapDispatchToProps)(Buy);
export default Buy;