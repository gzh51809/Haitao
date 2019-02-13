import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './components/style/common/reset.css';

import { Route,Switch,Redirect,withRouter } from 'react-router-dom';
import Home from './components/home/home';
import Category from './components/category/category';
import Cart from './components/cart/cart';
import My from './components/my/my';
import Search from './components/search/search';
import Goodslist from './components/goodslist/goodslist';
import Detail from './components/detail/detail';
import Footer from './components/common/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Footer props={this.props}></Footer>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/category' component={Category} />
          <Route path='/cart' component={Cart} />
          <Route path='/my' component={My} />
          <Route path='/search' component={Search} />
          <Route path='/list' component={Goodslist} />
          <Route path='/detail/:name' component={Detail} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}

// 利用withRouter高阶组件包装App组件
App = withRouter(App);

export default App;
