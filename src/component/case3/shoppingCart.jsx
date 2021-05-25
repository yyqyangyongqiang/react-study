import React, { Component } from 'react';
// 引入列表組件
import ShoppingList from './shoppingList'
import './css/base.css';
import './css/index.css';

class ShoppingCart extends Component {
    render() {
        return (
            <div>
                <ShoppingList />
                <div class="controls clearfix">
                    <a href="javascript:" class="del-all">删除所选商品</a>
                    <a href="javascript:" class="clear">清理购物车</a>
                    <a href="javascript:" class="pay">去结算</a>
                    <p>
                        已经选中<span id="totalCou`nt">0</span>件商品;总价：<span id="totalPrice" class="total-price">0￥</span>
                    </p>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;