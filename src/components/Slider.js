import React, { Component } from "react";

class Slider extends Component {
  render() {
    return (
      <div>
        <input
          ref="input"
          value={this.props.val}
          type="range"
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          onChange={this.props.update}
        />
        <div>
          {this.props.col}: {this.props.children}
        </div>
      </div>
    );
  }
}

export default Slider;
