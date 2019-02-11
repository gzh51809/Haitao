import React from 'react';
import { Icon } from 'antd';
import axios from 'axios';
import qs from 'qs';

import '../style/search/search.css';

import Ssheader from './ssheader';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            list:[
                {
                    RptCol1: "Zatchels"
                },{
                    RptCol1: "ARCANCIL"
                },{
                    RptCol1: "爱他美"
                },{
                    RptCol1: "zat"
                },{
                    RptCol1: "Waitrose"
                },{
                    RptCol1: "包邮包税"
                },{
                    RptCol1: "Holland & Barrett"
                },{
                    RptCol1: "奶粉"
                },{
                    RptCol1: "钙"
                },{
                    RptCol1: "剑桥包"
                }
            ]
        }
    }
    goto(){
        this.props.history.push('/list');    
    }
    componentDidMount() {
        // let data = qs.stringify({
        //     AllowPaging: true,
        //     OrderBy: "RptCol2",
        //     OrderDirection: "desc",
        //     PageIndex: 0,
        //     PageSize: 10,
        //     ReportBody: true,
        //     ReportHeader: false,
        //     ReportId: 72,
        //     ReportParameters: {DateStart: "2019-01-12", DateEnd: "2019-02-11"},
        //     SortDirection: 0
        // })
        // axios.post('https://webapi.51taouk.com/api/report/ReportData',data)
        //     .then((res) => {
        //         console.log(res.data);
        //     })
        //     .catch((err)=>{
        //         console.log(err);
        //     })
    }
    render(){
        return (
            <div className="tosearch">
                <Ssheader props={this.props}></Ssheader>
                <div className="sshot">
                    <div className="bar">
                        <Icon type="fire" />
                        <span>热门搜索</span>
                    </div>
                    <div className="sscontent">
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <div className="ssitem" key={index} onClick={this.goto.bind(this)}>
                                    <span>{item.RptCol1}</span>
                                </div>
                            )
                        })
                    }
                        {/* <div className="ssitem">
                            <span>Zatchels</span>
                        </div>
                        <div className="ssitem">
                            <span>ARCANCIL</span>
                        </div>
                        <div className="ssitem">
                            <span>爱他美</span>
                        </div>
                        <div className="ssitem">
                            <span>zat</span>
                        </div><div className="ssitem">
                            <span>Waitrose</span>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;