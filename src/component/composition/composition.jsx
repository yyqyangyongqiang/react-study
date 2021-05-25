import React, { Component } from 'react';


function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-'+props.color}>
            {props.children}
        </div>
    )
}


class Composition extends Component {
    render() {
        return (
            <div>
                Compostion vs Inheriance
                组合 vs 继承

            </div>
        );
    }
}

export default Composition;