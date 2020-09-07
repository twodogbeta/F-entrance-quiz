import React, { Component } from 'react';
import './App.scss';
import Header from "./component/Header/Header";
import MainContent from "./component/MainContent/MainContent";


class App extends Component {
  render() {
    return (
          <div className="App">
             <Header/>
             <MainContent/>
          </div>
    );
  }
}

export default App;
