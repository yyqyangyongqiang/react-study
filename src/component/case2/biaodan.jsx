import React, { Component } from 'react';

class Biaodan extends Component {

    state = {
        serialNumber: 0,
        name: ""
    }

    // 改变编号
    changeNumber = (e) => {
        this.setState({
            serialNumber: e.target.value
        })
    }

    // 改变内容
    changName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    // 触发父组件方法
    handlerFather = () => {
        if(this.state.serialNumber == 0 || this.state.name.length == 0){
            console.log('请输入编号和名称');
        }else {
            this.props.appendItem(this.state.serialNumber, this.state.name)
        }
    }

    render() {
        return (
            <div>
                <div className="shopping-left">
                    <input type="text" value={this.state.serialNumber} onChange={this.changeNumber} placeholder="输入编号" />
                    <input type="text" value={this.state.name} onChange={this.changName} placeholder="输入名称" />
                    <button onClick={this.handlerFather}>添加数据</button>
                    <hr />
                </div>
            </div>
        );
    }
}

export default Biaodan;