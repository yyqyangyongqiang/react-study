import React, { Component } from 'react';
import './index.css';
// 引入路由组件
import { HashRouter, Switch, Link, Route, Redirect } from 'react-router-dom';
import Animation from './Animation';

class Index extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <div className="left">
                        <h1>一级导航</h1>
                        <div>
                            <Link to="/animation">动画</Link>
                        </div>
                        <div>
                            <Link to="/view">视屏教程</Link>
                        </div>
                        <div>
                            <Link to="/user">用户管理</Link>
                        </div>

                    </div>
                    <div className="right">
                        <Switch>
                            <Route path="/animation" component={Animation}></Route>
                            <Route></Route>
                            <Route></Route>
                            <Redirect from="/" to="/animation"></Redirect>
                        </Switch>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

export default Index;