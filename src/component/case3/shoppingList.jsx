import React, { Component } from 'react';
import img01 from "./uploads/01.jpg";
import img02 from "./uploads/02.jpg";
import img03 from "./uploads/03.jpg";
import img04 from "./uploads/04.jpg";
import img05 from "./uploads/05.jpg";
import img06 from "./uploads/06.jpg";

class ShoppingList extends Component {
    state = {
        list: [
            {
                check: true,
                img: img01,
                name:"牛奶",
                price: 20,
                num: 1,
                sum: 20
            },
            {
                check: true,
                img: img01,
                price: 20,
                num: 1,
                sum: 20
            },
            {
                check: true,
                img: img01,
                price: 20,
                num: 1,
                sum: 20
            },
        ]
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <input type="checkbox" readOnly id="all" />全选
                            </th>
                            <th>商品</th>
                            <th>单价</th>
                            <th>商品数量</th>
                            <th>小计</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.list.map((item) => {
                                return (
                                    <tr>
                                        <td>
                                            <input type="checkbox" readOnly />
                                        </td>
                                        <td>
                                            <img src={img01} />
                                            <p>牛奶</p>
                                        </td>
                                        <td>20￥</td>
                                        <td>
                                            <div className="count-c clearfix">
                                                <a href="javascript:" className="reduce disabled">-</a>
                                                <input type="text" readonly value="1" />
                                                <a href="javascript:" className="add">+</a>
                                            </div>
                                        </td>
                                        <td>20￥</td>
                                        <td>
                                            <a href="javascript:" className="del">删除</a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ShoppingList;