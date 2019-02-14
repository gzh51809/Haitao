import React from 'react';
import { Icon, Checkbox } from 'antd';
import { connect } from 'react-redux';

import '../style/cart/items.css';

class Items extends React.Component {
    constructor() {
        super();
        this.state = {
            checkedList:[],
            checkAll: false,
            total:0.00,
            allprice:0.00
        }
    }
    onChange(checkedList){
        let all=0.00;
        checkedList.map((item)=>{
            this.props.data.map((item2)=>{
                if(item===item2.id){
                    all+=item2.total;  
                }
            })
        })
        this.setState({
            checkedList,
            checkAll: checkedList.length === this.props.data.length,
            total:all
        });
    }
    onCheckAllChange = (e) => {
        let arr=[];
        this.props.data.map((item) => {
            return arr.push(item.id);
        })
        this.setState({
            checkedList: !this.state.checkAll ? arr : [],
            checkAll: !this.state.checkAll,
            total: !this.state.checkAll? this.state.allprice : 0.00
        });
    }
    componentDidMount() {
        // console.log("items props", this.props);
        if (this.props.data.length!==0){
            this.props.show(true);
            let arr=[];
            let all=0;
            this.props.data.map((item)=>{
                return arr.push(item.id);
            })
            this.props.data.map((item) => {
                all+=item.total;
            })
            this.setState({
                checkedList:arr,
                checkAll:true,
                total:all,
                allprice:all
            })
        }
    }
    render() {//console.log("items props",this.props);
        let {checkedList,total} = this.state;
        let {data} = this.props;
        return (
            <div className="carts">
                <div className={this.props.data.length===0?"show":"hide"}>购物车空空如也，还不快去海淘一下~</div>
                <div className={this.props.data.length === 0 ? "hide" : "cartlist"}>
                    <div className="single">
                    {
                        data.map((item,index)=>{
                            return (
                                <div className="c-item" key={item.id}>
                                    <div className="c-item-t">
                                        <div className="c-t-l checked" 
                                        onClick={()=>{
                                            if(checkedList.includes(item.id)){
                                                let idx=checkedList.indexOf(item.id);
                                                checkedList.splice(idx,1);
                                            }else{
                                                checkedList.push(item.id);
                                            }
                                            this.onChange(checkedList);
                                        }}
                                        >
                                            <Checkbox
                                            checked={checkedList.some(id=>id==item.id)}   
                                            ></Checkbox>
                                        </div>
                                        <div className="c-t-r">
                                            <div className="icon"><Icon type="shop" /></div>
                                            <span>直邮商城</span>
                                        </div>
                                    </div>
                                    <div className="c-item-c">
                                        <div className="c-l checked"
                                            onClick={() => {
                                                if (checkedList.includes(item.id)) {
                                                    let idx = checkedList.indexOf(item.id);
                                                    checkedList.splice(idx, 1);
                                                } else {
                                                    checkedList.push(item.id);
                                                }
                                                this.onChange(checkedList);
                                            }}
                                        >
                                            <Checkbox
                                            checked={checkedList.some(id => id == item.id)}
                                            ></Checkbox>
                                        </div>
                                        <div className="c-r">
                                            <div className="c-img">
                                                <img alt="" src={item.img} />
                                            </div>
                                            <div className="c-item-r">
                                                <div className="c-name">{item.name}</div>
                                                <div className="c-price">
                                                    <div className="c-price-l">
                                                        <span className="now">£{item.price}</span>
                                                        <span className="del">&nbsp;<del>£{item.oldprice}</del></span>
                                                    </div>
                                                    <div className="c-price-r">x{item.qty}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c-item-f">
                                        <span className="c-text">商品小计：</span>
                                        <span className="total">
                                            <span
                                            className={checkedList.some(id => id == item.id)?"":"hide"}
                                            >£{item.total}</span>
                                            <span
                                            className={checkedList.some(id => id == item.id) ? "hide" : ""}
                                            >£0.00</span>
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className="account">
                        <div className="account-l">
                            <div className="l-l checked">
                                <Checkbox 
                                onChange={this.onCheckAllChange} 
                                checked={this.state.checkAll}
                                ></Checkbox>
                            </div>
                            <div className="l-c" onClick={this.onCheckAllChange}>
                                <span>全选</span>
                            </div>
                            <div className="l-r">
                                <div className="total-con">合计:</div>
                                <div className={checkedList.length===0?"hide":"l-total"}>£{total}</div>
                                <div className={checkedList.length===0?"l-total":"hide"}>£0.00</div>
                                <div className="freight">不含运费</div>
                            </div>
                        </div>
                        <div className="account-r">结算</div>
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
    // console.log(ownprops);
    return {
        addCart: (goods) => dispatch(goods),
        // onRemoveGoods: (action) => dispatch(action),
    }
}
Items = connect(mapStateToProps, mapDispatchToProps)(Items);
export default Items;