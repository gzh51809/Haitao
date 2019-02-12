import React from 'react';
import axios from 'axios';

import Topsearch from '../common/topsearch';
import Header from './header';
import Content from './content';
import Brand from './brand';

class Category extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [],
            SubCategories: [],
            tabIs: 0,
            contentIs:0,
            spinning:true
        }
        this.change = this.change.bind(this);
        this.changeTab = this.changeTab.bind(this);
        this.goto = this.goto.bind(this);
    }
    componentDidMount() {
        axios.post('https://m.51taouk.com/api/category')
            .then((res) => {
                // console.log(res.data.Category);
                this.setState({
                    list: res.data.Category,
                    SubCategories: res.data.Category[0].SubCategories,
                    spinning:false
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }
    changeTab(index){
        this.setState({
            tabIs: index
        })
    }
    change(index, SubCategories) {
        this.setState({
            SubCategories: SubCategories,
            contentIs: index
        })
    }
    goto(){
        this.props.history.push('/list');
    }
    render() {
        return (
            <div>
                <Topsearch props={this.props}></Topsearch>
                <Header 
                tabIs={this.state.tabIs}
                changeTab={this.changeTab}
                ></Header>
                {
                    <div className={this.state.tabIs===0?"":"hide"}>
                        <Content 
                        list={this.state.list}
                        SubCategories={this.state.SubCategories}
                        contentIs={this.state.contentIs}
                        spinning={this.state.spinning}
                        change={this.change}
                        goto={this.goto}
                        ></Content>
                    </div> 
                }
                {
                    <div className={this.state.tabIs === 1 ? "" : "hide"}>
                        <Brand
                        list={this.state.list}
                        ></Brand>
                    </div>
                }
            </div>
        )
    }
}

export default Category;