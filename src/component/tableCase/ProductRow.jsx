import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {
        return (
            <div>
                {this.props.option.name}
                {this.props.option.price}
            </div>
        )
    }
}
