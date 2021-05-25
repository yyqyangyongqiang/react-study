import React, { Component } from 'react';

class ChildBoy extends Component {

    constructor (props){
        super();
        console.log(props);
    }

    addProps = () => {
        this.props.father(this.props.count+1);

    }

    render() {
        return (
            <div>
                <button onClick={this.addProps}>{this.props.count}</button>
            </div>
        );
    }
}

export default ChildBoy;