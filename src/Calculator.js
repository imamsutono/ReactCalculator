import React, { Component } from 'react';
import {
    View,
    Text,
    AppRegistry
} from 'react-native';

import Style from './Style';
import InputButton from './InputButton';

// define the input buttons that will be displayed in the calculator
const inputButtons = [
    ['C', '%', 'x^', 'DEL'],
    [1, 2, 3, '/'],
    [4, 5, 6, 'X'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']
];

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            previousInputValue: 0,
            inputValue: 0,
            calculation: 0,
            selectedSymbol: null,
            operator: null,
            finalCalculation: null
        }
    }

    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.displayContainer}>
                    <Text style={Style.appsTitle}>React Calculator</Text>
                    <Text style={Style.calculationText}>{this.state.finalCalculation}</Text>
                    <Text style={Style.displayText}>{this.state.calculation}</Text>
                </View>
                <View style={Style.inputContainer}>
                    {this._renderInputButtons()}
                </View>
            </View>
        );
    }

    _renderInputButtons() {
        let views = inputButtons.map((row, idx) => {
            let inputRow = row.map((buttonVal, columnIdx) => {
                return <InputButton
                            value={buttonVal}
                            highlight={this.state.selectedSymbol === buttonVal}
                            onPress={this._onInputButtonPressed.bind(this, buttonVal)}
                            key={'button-'+ columnIdx}/>;
            });

            return <View style={Style.inputRow} key={'row-'+ idx}>{inputRow}</View>
        });

        return views;
    }

    _onInputButtonPressed(input) {
        switch (typeof input) {
            case 'number':
                return this._handleNumberInput(input)
            case 'string':
                return this._handleStringInput(input)
        }
    }

    _handleNumberInput(num) {
        let inVal = this.state.inputValue,
            calc = this.state.calculation;

        if (typeof calc[calc.length - 1] !== 'string') {
            inputValue = (this.state.inputValue * 10) +num
            calculation = (this.state.inputValue * 10) +num
        } else {
            inputValue = inVal.toString() + num
            calculation = calc +' '+ num
        }

        this.setState({
            inputValue: inputValue,
            calculation: calculation
        })
    }

    _handleStringInput(str) {
        var value = this.state.inputValue

        if (value !== 0) {

            switch (str) {
                case '/':
                case '+':
                case '-':
                    this.setState({
                        selectedSymbol: str,
                        operator: str,
                        previousInputValue: value,
                        inputValue: 0,
                        calculation: value +' '+ str
                    });
                    break;
                case 'X':
                    this.setState({
                        selectedSymbol: str,
                        operator: '*',
                        previousInputValue: value,
                        inputValue: 0,
                        calculation: value +' '+ str
                    });
                    break;
                case '%':
                    this.setState({
                        selectedSymbol: str,
                        operator: '*',
                        previousInputValue: value / 100,
                        inputValue: 0,
                        calculation: value +' '+ str
                    });
                    break;
                case 'x^':
                    this.setState({
                        selectedSymbol: str,
                        operator: '*',
                        previousInputValue: value,
                        inputValue: 0,
                        calculation: value +' '+ str
                    });
                    break;
                case '=':
                    let symbol = this.state.selectedSymbol,
                        operator = this.state.operator,
                        inputValue = value,
                        previousInputValue = this.state.previousInputValue,
                        result = null;

                    if (!symbol) { return; }

                    if (symbol !== 'x^') {
                        result = eval(previousInputValue + operator + inputValue)
                    } else {
                        result = Math.pow(previousInputValue, inputValue)
                    }

                    if (inputValue.charAt(0) === '0') {
                        var lastValue = inputValue.substr(1);
                    }

                    this.setState({
                        previousInputValue: 0,
                        inputValue: result,
                        selectedSymbol: null,
                        calculation: result,
                        finalCalculation: previousInputValue +' '+ symbol +' '+ lastValue
                    });
                    break;
                case 'C':
                    this.setState({
                        inputValue: 0,
                        calculation: 0,
                        finalCalculation: null
                    });
                    break;
                case 'DEL':
                    this.setState({
                        inputValue: this._delete(value),
                        calculation: this._delete(value)
                    });
                    break;
                case '.':
                    this.setState({
                        inputValue: value +'.',
                        calculation: value +'.'
                    });
                    break;
            }

        }
    }

    _delete(num) {
        return num.toString().substring(0, num.toString().length - 1);
    }
}

AppRegistry.registerComponent('Calculator', () => Calculator);
