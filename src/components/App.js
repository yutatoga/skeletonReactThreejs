import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
      <h1>Test</h1>
      </header>
      <div>
      <Link to={`/sample`}>sample</Link>
      </div>
      </div>
    );
  }
}

export default App;
