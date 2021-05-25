import React, { Component } from 'react';
// 引入子组件
import Child from './Child';
import ChildBoy from './ChildBoy';

class Sum extends Component {
    
    state = {
        a:20,
        b:11
    }

    // A子传父
    Afather = (item) => {
        this.setState({
            a:item
        })
    }

    // B子传父
    Bfather = (item) => {
        this.setState({
            b:item
        })
    }

    render() {
        return (
            <div>
                {this.state.a +this.state.b}
                <Child count={this.state.a} father={this.Afather}/>
                <ChildBoy count={this.state.b} father={this.Bfather}></ChildBoy>
            </div>
        )
    }
}

export default Sum;