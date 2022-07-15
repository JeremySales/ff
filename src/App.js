import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import UserInputs from './components/inputs';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Header />
        <UserInputs />
      </div>
    );
  }
}

export default App;
