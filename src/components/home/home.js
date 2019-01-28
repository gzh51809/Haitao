import React from 'react';

import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
// import fetch from 'fetch';

import '../style/home.css';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    componentDidMount(){
        axios.get('https://webapi.51taouk.com/api/content/getAllContentsByPage/app_home')
        // axios.post('https://m.51taouk.com/api/category')
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    render(){
        return (
            <Carousel autoplay>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>
        )
    }
}

export default Home;