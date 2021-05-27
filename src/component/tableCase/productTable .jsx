import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

/**
 * @description: 展示数据内容并根据用户输入展示筛选结果
 * @param {*}
 * @return {*}
 */
export default class ProductTable extends Component {
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    {
                        this.props.products.map((item, key) => {
                            return (
                                <tr key={key}>
                                    <ProductCategoryRow option={item.category}/>
                                    <ProductRow option={item}/>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        )
    }
}