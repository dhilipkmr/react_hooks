import React, { Component } from 'react';
import Todo from './components/Todo';
import Header from './components/Header';
import Auth from './components/Auth';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo></Todo>
        <Header/>
        <Auth/>
      </div>
    );
  }
}

export default App;
