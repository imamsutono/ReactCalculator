import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import Style from './Style';

export default class InputButton extends Component {
    render() {
        return (
            <TouchableHighlight style={[Style.inputButton, typeof this.props.value == 'number' ? Style.inputButtonNumber : null, this.props.highlight ? Style.inputButtonHighlighted : null]}
                                underlayColor={typeof this.props.value == 'number' ? '#FF8F00' : '#E0E0E0'}
                                onPress={this.props.onPress}>
                <Text style={[Style.inputButtonText, typeof this.props.value == 'number' ? Style.inputButtonTextNumber : null]}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    }
}
