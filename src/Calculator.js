import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
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
            selectedSymbol: null,
            operator: null
        }
    }

    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.displayContainer}>
                    <Text style={Style.appsTitle}>React Calculator</Text>
                    <Text style={Style.displayText}>{this.state.inputValue}</Text>
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
        var inVal = this.state.inputValue;

        if (inVal[inVal.length - 1] !== '.') {
            var inputValue = (this.state.inputValue * 10) + num;
        } else {
            var inputValue = inVal.toString() + num;
        }

        this.setState({
            inputValue: inputValue
        })
    }

    _handleStringInput(str) {
        var value = this.state.inputValue

        switch (str) {
            case '/':
            case '+':
            case '-':
                this.setState({
                    selectedSymbol: str,
                    operator: str,
                    previousInputValue: value,
                    inputValue: 0
                });
                break;
            case 'X':
                this.setState({
                    selectedSymbol: str,
                    operator: '*',
                    previousInputValue: value,
                    inputValue: 0
                });
                break;
            case '%':
                this.setState({
                    selectedSymbol: str,
                    operator: '*',
                    previousInputValue: value / 100,
                    inputValue: 0
                });
                break;
            case 'x^':
                this.setState({
                    selectedSymbol: str,
                    operator: '*',
                    previousInputValue: value,
                    inputValue: 0
                });
                break;
            case '=':
                let symbol = this.state.selectedSymbol,
                    operator = this.state.operator,
                    inputValue = value,
                    previousInputValue = this.state.previousInputValue,
                    result = null;

                if (!symbol) {
                    return;
                }

                if (symbol !== 'x^') {
                    result = eval(previousInputValue + operator + inputValue)
                } else {
                    result = Math.pow(previousInputValue, inputValue)
                }

                this.setState({
                    previousInputValue: 0,
                    inputValue: result,
                    selectedSymbol: null
                });
                break;
            case 'C':
                this.setState({
                    inputValue: 0
                });
                break;
            case 'DEL':
                this.setState({
                    inputValue: this._substring(value)
                });
                break;
            case '.':
                this.setState({
                    inputValue: value +'.'
                });
                break;
        }
    }

    _substring(num) {
        return num.toString().substring(0, num.toString().length - 1);
    }
}

AppRegistry.registerComponent('Calculator', () => Calculator);
