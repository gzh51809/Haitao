import React from 'react';
import { Spin } from 'antd';

import '../style/category/content.css';

class Content extends React.Component {
    constructor() {
        super();
        this.state = {
    
        }
    }
    render() {
        let { list, SubCategories, contentIs, spinning, change, goto} = this.props;
        return (
            <div className="content">
            {
                <div className={spinning?"":"hide"}>
                    <Spin size="large" spinning={spinning}/>
                </div>
            }
            {
                <div className={spinning ? "hide" : ""}>
                    <div className="leftlist">
                    {
                        list.map((item,index)=>{
                            return <div 
                                    className={contentIs===index?"item active":"item"} 
                                    key={index}
                                    onClick={()=>{change(index, item.SubCategories)}}
                                    >{item.Name}</div>
                        })
                    }
                    </div>
                    <div className="rightlist">
                    {
                        list.map((item,index)=>{
                            if(index===contentIs){
                                return <div className="img" key={index}>
                                            <img alt="" src={item.HLongImageUrl} />
                                        </div>
                            }
                        })
                    }
                        <div className="sub">
                        {
                            SubCategories.map((item,index)=>{
                                return  <div className="item" key={index} onClick={goto}>
                                            <div className="img2">
                                                <img alt="" src={item.SmallImageUrl} />
                                            </div>
                                            <span>{item.Name}</span>
                                        </div>       
                            })
                        }
                        </div>
                    </div>
                </div>
            }
            </div>
        )
    }
}

export default Content;