import React, { Component } from 'react';
import './App.scss';
import MainContent from "./component/MainContent/MainContent";


class App extends Component {
  render() {
    return (
          <div className="App">
             <MainContent/>
          </div>
    );
  }
}

export default App;
