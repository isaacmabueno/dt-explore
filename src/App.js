import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Content from './Content';
import { Button } from 'react-bootstrap';

 class App extends Component {
   render() {
     return (
         <section>
            <div className="container-fluid">
                <div className="row App">   
                    
                    <Nav />
                    <Content />
                    
                </div>
            </div>
        </section>
     );
   }
 }

 export default App;