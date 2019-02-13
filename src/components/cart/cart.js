import React from 'react';
import { connect } from 'react-redux';

import Top from './top';
import Items from './items';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Top></Top>
                <Items></Items>
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
        addCart: (goods) => dispatch(goods),
        // onRemoveGoods: (action) => dispatch(action),
    }
}
Cart = connect(mapStateToProps, mapDispatchToProps)(Cart);
export default Cart;