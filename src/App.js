import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './components/style/common/reset.css';

import { Route,Switch,Redirect,withRouter } from 'react-router-dom';
import Home from './components/home/home';
import Category from './components/category/category';
import Cart from './components/cart/cart';
import My from './components/my/my';
// import Topsearch from './components/common/topsearch';
import Footer from './components/common/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        {/* <Topsearch></Topsearch> */}
        <Footer props={this.props}></Footer>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/category' component={Category} />
          <Route path='/cart' component={Cart} />
          <Route path='/my' component={My} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}

// 利用withRouter高阶组件包装App组件
App = withRouter(App);

export default App;
