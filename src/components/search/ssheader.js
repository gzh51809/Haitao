import React from 'react';
import { Icon } from 'antd';

import '../style/search/ssheader.css';

class Ssheader extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    back(){
        this.props.props.history.goBack();
    }
    render() {
        return (
            <div className="ssheader">
                <div className="left" onClick={this.back.bind(this)}><Icon type="left" /></div>
                <div className="center"><input type="text" placeholder="搜索英国热卖" /></div>
                <div className="right">搜索</div>
            </div>
        )
    }
}
export default Ssheader;