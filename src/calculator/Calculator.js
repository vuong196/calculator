import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

import ResultDisplay from './ResultDisplay';
import Style from './Style';
import InputButton from './InputButton';

/**
 * inputButtons
 * Define the input buttons that will be displayed in the calculator.
 */
const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']
];

export default class Calculator extends Component {

  constructor(props) {
    super(props);
        this.state = {
            previousInputValue: 0,
            inputValue: 0,
            selectedSymbol: null
        }
  }
  _renderInputButtons(){
    let views = [];
    for (var i = 0; i < inputButtons.length; i ++) {
      let row = inputButtons[i];

      let inputRow=[];
      for (var j=0; j<row.length;j++){
        let input = row[j];
        inputRow.push(
          <InputButton
                value={input}
                highlight={this.state.selectedSymbol === input}
                onPress={this._onInputButtonPressed.bind(this, input)}
                key={i + "-" + j}/>
      );
      }
      views.push(
        <View style={Style.inputRow} value={inputRow} key={"row-"+ i}>{inputRow}</View>
      )
    }
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
        let inputValue = (this.state.inputValue * 10) + num;

        this.setState({
            inputValue: inputValue
        })
  }
  _handleStringInput(str) {
    switch (str) {
        case '/':
        case '*':
        case '+':
        case '-':
            this.setState({
                selectedSymbol: str,
                previousInputValue: this.state.inputValue,
                inputValue: 0
            });
            break;
        case '=':
                let symbol = this.state.selectedSymbol,
                    inputValue = this.state.inputValue,
                    previousInputValue = this.state.previousInputValue;

                if (!symbol) {
                    return;
                }

                this.setState({
                    previousInputValue: 0,
                    inputValue: eval(previousInputValue + symbol + inputValue),
                    selectedSymbol: null
                });
                break;
    }
  }
  render() {
    
    return (
        <View style={Style.container}>
            <View style={Style.resultdisplay}>{this.state.inputValue}</View>
            <View style={Style.buttons}>{this._renderInputButtons()}</View>
        </View>
    )
  }
}
