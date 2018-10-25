import React, { Component } from 'react';
import './App.css';
import Nav from './Nav'

 class App extends Component {
   render() {
     return (
       <div className="App">
         <header className="App-header">
           <p>
                DialogTech
           </p>
           <a
             className="App-link"
             href="https://dialogtech.com"
             target="_blank"
             rel="noopener noreferrer"
           >
            Learn More
           </a>
           <Nav />
         </header>
       </div>
     );
   }
 }

 export default App;