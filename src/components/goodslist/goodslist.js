import React from 'react';

import '../style/goodslist/goodslist.css';

import Ssheader from '../search/ssheader';
import Nav from './nav';
import Goods from './goods';

class Goodslist extends React.Component {
    constructor() {
        super();
        this.state = {
            ListObjects:[
                {
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/1a1b78de-4edb-4522-b874-3b99ce5cbdbb.jpg",
                    Name: "英国原装爱他美 白金版 1段 0-6个月 奶粉800G",
                    Price: 13.99,
                    OldPrice: 19.99,
                    IsFreeShipping: false
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/4aee76c5-1281-438b-9c63-168331b405c7.jpg",
                    Name: "【包邮包税】2罐 英国原装爱他美 白金版 1段 0-6个月 奶粉800G",
                    Price: 48,
                    OldPrice: 49,
                    IsFreeShipping: true
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/a84a8ee6-48c8-4797-8835-166afd90b954.jpg",
                    Name: "【包邮包税】4罐 英国原装爱他美 白金版 1段 0-6个月 奶粉800G",
                    Price: 96,
                    OldPrice: 110,
                    IsFreeShipping: true
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/d91322e0-1a14-4f45-90d5-08359709001f.jpg",
                    Name: "【包邮包税】6罐 英国原装爱他美 白金版 1段 0-6个月 奶粉800G",
                    Price: 144,
                    OldPrice: 160,
                    IsFreeShipping: true
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/10192a82-07ff-45c9-9daf-3eebdb87ee82.jpg",
                    Name: "英国原装爱他美 白金版 2段 6-12个月 奶粉800G",
                    Price: 12.99,
                    OldPrice: 19.99,
                    IsFreeShipping: false
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/8a1bdfb0-bfef-4df7-9da2-558c4c3b9844.jpg",
                    Name: "【包邮包税】2罐 英国原装爱他美 白金版 2段 6-12个月 奶粉800G",
                    Price: 50,
                    OldPrice: 53,
                    IsFreeShipping: true
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/2ae08a10-5420-438c-9d85-2440213e8751.jpg",
                    Name: "【包邮包税】4罐 英国原装爱他美 白金版 2段 6-12个月 奶粉800G",
                    Price: 96,
                    OldPrice: 101,
                    IsFreeShipping: true
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/f659c903-b05a-4bec-8a4b-49f88940a690.jpg",
                    Name: "【包邮包税】6罐 英国原装爱他美 白金版 2段 6-12个月 奶粉800G",
                    Price: 144,
                    OldPrice: 149,
                    IsFreeShipping: true
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/524c679f-aba4-4775-b68a-75823538075c.jpg",
                    Name: "英国原装爱他美 白金版 3段 1-2岁 奶粉800G",
                    Price: 13.99,
                    OldPrice: 19.99,
                    IsFreeShipping: false
                },{
                    ImageUrl: "https://resource.51taouk.com/AdminImages/Product/6/8561eac4-4406-4115-aced-b53c70647055.jpg",
                    Name: "【包邮包税】2罐 英国原装爱他美 白金版 3段 1-2岁 奶粉800G",
                    Price: 50,
                    OldPrice: 53,
                    IsFreeShipping: true
                }
            ]
        }
    }
    render(){
        return (
            <div className="goodslist">
                <Ssheader props={this.props}></Ssheader>
                <div className="list">
                    <Nav></Nav>
                    <Goods list={this.state.ListObjects}></Goods>
                </div>
            </div>
        )
    }
}
export default Goodslist;