import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: 165,
      green: 57,
      blue: 230,
      alpha: 1
    };
  }

  update = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const bgc =
      this.state.alpha === 1
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
        <p>red</p>
        <input
          value={this.state.red}
          type="range"
          min="0"
          max="255"
          name="red"
          onChange={this.update}
        />
        <p>green</p>
        <input
          value={this.state.green}
          type="range"
          min="0"
          max="255"
          name="green"
          onChange={this.update}
        />
        <p>blue</p>
        <input
          value={this.state.blue}
          type="range"
          min="0"
          max="255"
          name="blue"
          onChange={this.update}
        />
        <p>alpha</p>
        <input
          value={this.state.alpha}
          type="range"
          min="0"
          max="1"
          name="alpha"
          step="0.01"
          onChange={this.update}
        />
      </div>
    );
  }
}

export default App;
