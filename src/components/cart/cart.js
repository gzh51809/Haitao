import React from 'react';

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

export default Cart;