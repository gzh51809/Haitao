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
                    all+=Number(item2.total);  
                }
            })
        })
        this.setState({
            checkedList,
            checkAll: checkedList.length === this.props.data.length,
            total: all.toFixed(2)
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
        if (this.props.data.length!==0){
            this.props.setShow(true);
            let arr=[];
            let all=0.00;
            this.props.data.map((item)=>{
                return arr.push(item.id);
            })
            this.props.data.map((item) => {
                all+=Number(item.total);
            })
            this.setState({
                checkedList:arr,
                checkAll:true,
                total: all.toFixed(2),
                allprice: all.toFixed(2)
            })
        }
    }
    componentWillReceiveProps(){
        if (this.props.data.length !== 0) {
            let arr = [];
            let all = 0.00;
            this.props.data.map((item) => {
                return arr.push(item.id);
            })
            this.props.data.map((item) => {
                all += Number(item.total);
            })
            this.setState({
                checkedList: arr,
                checkAll: true,
                total: all.toFixed(2),
                allprice: all.toFixed(2)
            })
        }
    }
    render() {
        let {checkedList,total} = this.state;
        let {data,edit,updateCart,removeCart,removeMoreCart} = this.props;
        return (
            <div className="carts">
                <div className={data.length===0?"show":"hide"}>购物车空空如也，还不快去海淘一下~</div>
                <div className={data.length === 0 ? "hide" : "cartlist"}>
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
                                            checked={checkedList.some(id=>id===item.id)}   
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
                                            checked={checkedList.some(id => id === item.id)}
                                            ></Checkbox>
                                        </div>
                                        <div className="c-r">
                                            <div className="c-img">
                                                <img alt="" src={item.img} />
                                            </div>
                                            <div className="c-item-r">
                                                <div className={edit?"hide":""}>
                                                    <div className="c-name">{item.name}</div>
                                                    <div className="c-price">
                                                        <div className="c-price-l">
                                                            <span className="now">£{item.price}</span>
                                                            <span className="del">&nbsp;<del>£{item.oldprice}</del></span>
                                                        </div>
                                                        <div className="c-price-r">x{item.qty}</div>
                                                    </div>
                                                </div>
                                                <div className={edit ? "" : "hide"}>
                                                    <div className="c-num">
                                                        <div className={item.qty === 1 ? "c-sub opa" :"c-sub"}
                                                        onClick={()=>{
                                                            if(item.qty>1){
                                                                let goods = {
                                                                    id: item.id,
                                                                    qty: item.qty - 1,
                                                                    total: item.price * (item.qty - 1)
                                                                }
                                                                updateCart(goods);
                                                            }
                                                        }}
                                                        >
                                                            <img alt="" src="https://m.51taouk.com/static/images/decrement@3x.png" />
                                                        </div>
                                                        <div className="c-center">
                                                            <div>{item.qty}</div>
                                                        </div>
                                                        <div className="c-add"
                                                        onClick={()=>{
                                                            let goods={
                                                                id:item.id,
                                                                qty:item.qty+1,
                                                                total:item.price*(item.qty+1)
                                                            }
                                                            updateCart(goods);
                                                        }}
                                                        >
                                                            <img alt="" src="https://m.51taouk.com/static/images/increment@3x.png" />
                                                        </div>
                                                    </div>
                                                    <div className="c-del">
                                                        <div className="c-del-icon"
                                                        onClick={()=>{
                                                            let goods={
                                                                id:item.id
                                                            }
                                                            removeCart(goods);
                                                        }}
                                                        >
                                                            <Icon type="delete" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c-item-f">
                                        <span className="c-text">商品小计：</span>
                                        <span className="total">
                                            <span
                                            className={checkedList.some(id => id === item.id)?"":"hide"}
                                            >£{item.total}</span>
                                            <span
                                            className={checkedList.some(id => id === item.id) ? "hide" : ""}
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
                                <div className={edit ? "hide" :"l-r-con"}>
                                    <div className="total-con">合计:</div>
                                    <div className={checkedList.length===0?"hide":"l-total"}>£{total}</div>
                                    <div className={checkedList.length===0?"l-total":"hide"}>£0.00</div>
                                    <div className="freight">不含运费</div>
                                </div>
                            </div>
                        </div>
                        <div className={edit?"hide":"account-r"}>结算</div>
                        <div className={edit?"account-del":"hide"}>
                            <div className="delete"
                            onClick={()=>{
                                let goods = {
                                    id:checkedList
                                }
                                removeMoreCart(goods);
                            }}
                            >删除</div>
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
    // console.log(state);
    if (state.cart.cartlist.length===0){
        ownprops.setShow(false);
    }
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
        updateCart:(goods) => dispatch({
            type: 'updateCart',
            payload:goods
        }),
        removeCart:(goods) => dispatch({
            type:'removeCart',
            payload:goods
        }),
        removeMoreCart:(goods) => dispatch({
            type:'removeMoreCart',
            payload:goods
        })
    }
}
Items = connect(mapStateToProps, mapDispatchToProps)(Items);
export default Items;