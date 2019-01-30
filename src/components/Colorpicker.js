import React, { Component } from "react";
import ReactDOM from "react-dom";

import Slider from "./Slider";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: 165,
      green: 57,
      blue: 230,
      alpha: 1
    };
  }
  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.input).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.input).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.input).value,
      alpha: ReactDOM.findDOMNode(this.refs.alpha.refs.input).value
    });
  }
  render() {
    const bgc =
      this.state.alpha == 1
        ? `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`
        : `rgba(${this.state.red}, ${this.state.green}, ${this.state.blue}, ${
            this.state.alpha
          })`;
    let myStyle = {
      backgroundColor: bgc
    };

    return (
      <div className="color-picker">
        <div className="color" style={myStyle} />
        <div className="result">{bgc}</div>
        <Slider
          ref="red"
          min="0"
          max="255"
          col="red"
          val={this.state.red}
          update={() => this.update()}
        >
          {this.state.red}
        </Slider>
        <Slider
          ref="green"
          min="0"
          max="255"
          col="green"
          val={this.state.green}
          update={() => this.update()}
        >
          {this.state.green}
        </Slider>
        <Slider
          ref="blue"
          min="0"
          max="255"
          col="blue"
          val={this.state.blue}
          update={() => this.update()}
        >
          {this.state.blue}
        </Slider>
        <Slider
          ref="alpha"
          min="0"
          max="1"
          col="alpha"
          step="0.01"
          val={this.state.alpha}
          update={() => this.update()}
        >
          {this.state.alpha}
        </Slider>
      </div>
    );
  }
}

export default ColorPicker;
