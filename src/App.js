import React, { Component } from 'react';
import './App.css';
import Nav from './Nav'
import { Button } from 'react-bootstrap';

 class App extends Component {
   render() {
     return (
       <div className="App">
         <header className="App-header">
           <Nav />
         </header>
       </div>
     );
   }
 }

 export default App;