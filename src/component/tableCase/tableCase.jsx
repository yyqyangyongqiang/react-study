import React, { Component } from 'react'
import SearchBar from './searchBar'
import ProductTable from './productTable '

/**
 * @description: 
 * 如何确定应该将那些部分划分到一个组件呢？
 * 答：可以将组件当做一种函数或者是对象来考虑，根据单一功能原则来判定组件的范围。
 * 单一功能原则：https://en.wikipedia.org/wiki/Single_responsibility_principle
 * 也就是说一个组件只负责一个功能. 如果一个组件需要负责更多的功能,这时候就听该考虑将它拆分为更小的组件了.
 * @param {*}
 * @return {*}
 */
export default class TableCase extends Component {
    constructor() {
        super();
        this.state = {
            option: [
                { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
                { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
                { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
                { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
                { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
                { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
            ]
        }
    }
    render() {
        return (
            <div>
                {/* 接收用户输入 */}
                <SearchBar />
                <ProductTable products={this.state.option}></ProductTable>
            </div>
        )
    }
}