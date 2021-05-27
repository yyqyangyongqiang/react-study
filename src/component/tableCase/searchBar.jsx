import React, { Component } from 'react'


export default class SearchBar extends Component {

    render() {
        return (
            <div>
                <input type="text" />
                <div>
                    <input type="checkbox" value="chat" name="hobby" />
                    only show products in stock
                </div>
            </div>
        )
    }
}
