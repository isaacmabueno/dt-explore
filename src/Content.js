import React, { Component } from 'react';
import App from './App'
class Content extends Component {
    render() {
        return (
            <div className="col-md-10 nopad">
                <h1>Content component is working</h1>
                <iframe id="iframe-page" src="https://www.dialogtech.com/target-caller-audiences"></iframe>
            </div>
        );
    }
}

export default Content;