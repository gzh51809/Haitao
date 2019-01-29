import React from 'react';

import '../style/category/brand.css';

class Brand extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        let { list } = this.props;
        return (
            <div className="brand">
                <div className="center">
                {
                    list.map((item,index)=>{
                        return <div className="item" key={index}>
                                    <p>{item.Name}</p>
                                    <div className="brands">
                                    {
                                        item.BrandsList.map((item2,index2)=>{
                                            if (item2.Published){
                                                return <div className="items" key={index2}>
                                                            <div>
                                                                <img ait="" src={item2.ImageUrl} />
                                                                <span>{item2.ChineseName}</span>
                                                            </div>
                                                        </div>
                                            }
                                        })
                                    }
                                    </div>
                                </div>
                    })
                }
                </div>
            </div>
        )
    }
}

export default Brand;