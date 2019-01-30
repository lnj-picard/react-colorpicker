import React, { Component } from 'react';

import './App.css';
import ColorPicker from './components/Colorpicker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ColorPicker />
      </div>
    );
  }
}

export default App;
