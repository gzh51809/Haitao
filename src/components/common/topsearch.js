import React from 'react';
import { Icon } from 'antd';

import '../style/topsearch.css'

class Topsearch extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    
    render() {
        return (
            <div className="search">
                <div>
                    <Icon type="search" />
                    <span>搜索美国热卖</span>
                </div>
            </div>
        )
    }
}

export default Topsearch;