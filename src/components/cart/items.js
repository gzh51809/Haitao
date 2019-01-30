import React from 'react';

import '../style/cart/items.css';

class Items extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className="carts">
               <div>购物车空空如也，还不快去海淘一下~</div>
            </div>
        )
    }
}

export default Items;