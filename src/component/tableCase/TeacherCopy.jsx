import React, { Component, Fragement } from 'react';

/**
 * @description: 每一行展示一个产品 Each row shows a product
 * @param {*}
 * @return {*}
 */
function ProductRow(params) {
    return (
        <tr>
            <td>{params.keyWord.name}</td>
            <td>{params.keyWord.price}</td>
        </tr>
    )
}

/**
 * @description: 为每一个产品类别展示标题 Display the title for each product category
 * @param {*}
 * @return {*}
 */
function ProductCategoryRow(params) {
    return (
        <tr>
            <th>{params.titleName}</th>
        </tr>
    )
}

/**
 * @description: 展示筛选后的数据内容 display the filtered data content
 * @param {*}
 * @return {*}
 */
class ProductTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let lastProduct = "";
        return (
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                {/* <Fragement> */}
                {
                    this.props.product.map((item) => {
                        // 名字筛选
                        if (item.name.indexOf(this.props.filtrate) == -1){
                            return;
                        };
                        // 库存筛选
                        if(this.props.showSotck && !item.stocked) {
                            return;
                        }
                        // 页面展示
                        if (item.category != lastProduct) {
                            lastProduct = item.category;
                            return(
                                <tr> <ProductCategoryRow titleName={item.category} /> <ProductRow keyWord={item}/></tr>
                            )
                        } else {
                            return (< ProductRow keyWord={item}/>)
                        }
                    })
                }
                {/* </Fragement> */}
            </table>
        );
    }
}

/**
 * @description: 用户搜索组件 含输入框 和 选择是否只展示有库存的. 由于本组件不需要保存 state 所以使用 函数组件
 * @param {*}
 * @return {*}
 */
function SearchBar(props) {

    return (
        <div>
            <input type="text" value={props.filtrate} onChange={(e) => { props.HandleFiltrate(e.target.value) }} />

            <br />

            <input type="checkbox" name="aaa" id="" onChange={(e) => { props.HandleShowStock(e.target.checked) }} checked={props.showSotckState} /> Only show products in stock
        </div>
    )
}

/**
 * @description: 总组件
 * @param {*}
 * @return {*}
 */
export default class TeacherCopy extends Component {
    state = {
        product: [
            { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
            { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
            { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
            { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
            { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
            { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
        ],
        filtrate: "",        // 用户输入内容
        showSotck: false     // 是否显示有库存的
    };

    // 更新filtrate
    HandleFiltrate = (e) => {
        console.log(e);
        this.setState({
            filtrate: e
        })
    }

    // 更新 展示有库存的
    HandleShowStockc = (e) => {
        this.setState({
            showSotck: e
        })
    }

    render() {
        return (
            <div>
                <SearchBar filtrate={this.state.filtrate} HandleFiltrate={this.HandleFiltrate} HandleShowStock={this.HandleShowStockc} showSotckState={this.state.showSotck} />
                <ProductTable filtrate={this.state.filtrate} showSotck={this.state.showSotck} product={this.state.product} />
            </div>
        )
    }
}
