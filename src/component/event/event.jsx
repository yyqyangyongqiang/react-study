import React, { Component } from 'react';


const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

/**
 * @description: 检测是否达到沸点
 * @param {
 *      celsius:number
 * } 
 * @return {
 *      达到沸点，未达到沸点
 * }
 */
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

/**
 * @description: 辨析而两个在华氏度和摄氏度之间转相互转换的函数 
 * @param {*}
 * @return {*}
 */
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

/**
 * @description: 我们将使用它来依据一个输入框的值计算出另一个输入框的值
 * @param {
 *      temperature 
 *      转换函数 
 * }
 * @return {
 *      当输入 temperature 的值无效时，函数返回空字符串，反之，则返回保留三位小数并四舍五入后的转化结果
 * }
 */
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}


/**
 * @description: 渲染一个用于输入温度的input , 并将其值保存在 this.state.temperature 中。
 * @param {*}
 * @return {*}
 */
class Calculator extends Component {

    constructor() {
        super();
        this.state = {
            temperature: 0,
            scale: 'c'
        }

        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(e) {
        this.setState({
            temperature: e,
            scale: 'c'
        })
    }
    handleFahrenheitChange(e) {
        this.setState({
            temperature: e,
            scale: 'f'
        })
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale='c'
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}  >
                </TemperatureInput>
                <TemperatureInput
                    scale='f'
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}>
                </TemperatureInput>
            </div>
        );
    }
}

/**
 * @description: 在已有的摄氏温度输入框的基础上，我们提供华氏度的输入框，并保持两个输入框数据同步
 * @param {*}
 * @return {*}
 */
class TemperatureInput extends Component {
    constructor(props) {

        super();
        // 绑定this
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const scale = this.props.scale;
        return (
            <div>
                <p>Enter temperature in {scaleNames[scale]}:</p>
                <input type="text" onChange={this.handleChange} value={this.props.temperature} />
            </div>
        );
    }
}


export default Calculator;