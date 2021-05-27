import React, { Component } from 'react';


function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-'+props.color}>
            {props.children}
        </div>
    )
}

function WelcomeDialog(){
    return (
        <FancyBorder color="red">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    )
}


// 少数情况下，你可能需要在一个组件中预留出几个‘洞’。这种情况下，我们可以不使用 children ，而是自行约定：将所需内容传入 props,并使用相应的 prop
function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    )
}


class Composition extends Component {
    render() {
        return (
            <div>
                Compostion vs Inheriance
                组合 vs 继承
                
                {/* <WelcomeDialog></WelcomeDialog> */}

                {/* 多个洞 */}
                <SplitPane left={<FancyBorder />} right={<WelcomeDialog />}></SplitPane>
            </div>
        );
    }
}

export default Composition;