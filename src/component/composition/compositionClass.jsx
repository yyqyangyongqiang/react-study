 
import React, { Component } from 'react'

/**
 * @description: 使用 class 形式实现组合   
 * props 和 组合为你提供了清晰而安全的制定组件外观和行为的灵活方式。注意：组件可以接受任何 props ，包括基本数据类型，React 元素以及函数。
 * React 并没有继承概念。如果你想要在组件见复用 非ui 功能，
 * 我们建议将其提取为一个单独的JavaScript 模块，如函数、对象和类。组件可以直接引入（import）而无需通过 extends 继承他们
 * @param {*}
 * @return {*}
 */
class ComClass extends Component {
    render(props) {
        return (
            <div>
                <div>
                    {this.props.left}
                    {this.props.right}
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default class CompositionClass extends Component {
    constructor () {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {
            login : ''
        }
    }

    handleChange (e) {
        this.setState({
            login:e.target.value
        })
    }

    handleSignUp () {
        alert(`Welcome aboard, ${this.state.login}`);
    }

    render() {
        return (
            <div title="Mars Exploration Program" message="How should we refer you ?">
                <ComClass left="我在左边" right="我在右边" >
                    <input value={this.state.login} onChange={this.handleChange}/>
                    <button onClick={this.handleSignUp}>点击</button>
                    <p>
                        {this.state.login}
                    </p>
                </ComClass>
            </div>
        )
    }
}