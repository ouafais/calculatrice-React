import React, { Component } from "react";
import Ecran from './Ecran';
import Clavier from './Clavier';

import './App.css';


class App extends Component {
  render(){
    return (
      <div className="calculatrice">
        <Ecran />
        <Clavier />
      </div>    
  );
}
  }
  

export default App;
