import React from 'react';

import Top from './top';
import Items from './items';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            show:false, //有无数据，是否显示编辑按钮
            edit:false //是否是编辑状态
        }
        this.setShow = this.setShow.bind(this);
        this.setEdit = this.setEdit.bind(this);
    }
    setShow(val){
        this.setState({
            show:val
        })
    }
    setEdit(){
        this.setState({
            edit: !this.state.edit
        })
    }
    render() {
        return (
            <div>
                <Top 
                show={this.state.show}
                edit={this.state.edit}
                setEdit={this.setEdit}
                ></Top>
                <Items 
                edit={this.state.edit}
                setShow={this.setShow} 
                ></Items>
            </div>
        )
    }
}

export default Cart;