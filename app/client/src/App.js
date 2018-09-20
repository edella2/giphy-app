
import React, { Component } from 'react';
import './App.css';
import GiphyContainer from './components/GiphyContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Text a friend a Giphy!</h1>
        </header>
        <GiphyContainer />
      </div>
    );
  }
}

export default App;
