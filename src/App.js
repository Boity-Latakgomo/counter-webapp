import navBar from './components/navBar';
import './App.css';
import React, { Component } from 'react';
import Counters from './components/counters';


class App extends Component {
  render(){
  return (
    <React.Fragment>
   <navBar /> 
   <main className="container">
   <Counters />
   </main>
   </React.Fragment>

  );
  }
  
}
export default App;
