import React, { Component } from 'react';
// 全局引入CSS 样式
import './index.css'
// 引入表格组件
import Biaodan from './biaodan'


class Biaoge extends Component {

    state = {
        list: [
        ]
    }

    // 子组件添加数据
    appendItem = (num, name) => {
        this.setState({
            list: [...this.state.list, { id: this.state.list.length + 1, 'name': name, time: new Date().toLocaleTimeString() }]
        })
    }

    // 删除子项
    handlerDelete = (e) => {
        this.setState({
            list:this.state.list.filter(item => item.id != e)
        });
    }

    render() {
        return (
            <div>
                <Biaodan appendItem={this.appendItem} />
                <table border="1">
                    <thead>
                        <tr>
                            <th>编号</th>
                            <th>品牌名称</th>
                            <th>创建时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.list.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.time}</td>
                                        <td><button onClick={()=>{this.handlerDelete(item.id)}}>删除</button> </td>
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

export default Biaoge;