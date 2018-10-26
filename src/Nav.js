import React, { Component } from 'react';
import './App.css'

const sidebarArray = ([
    'The Digital Marketers Playbook for Voice Analytics',
    'Optimize Google Ads, LinkedIn & Facebook ROI with Voice Analytics',
    '6 AI-Based Call Reports That Will Transform Your Digital Marketing ROI',
    'AI-Powered Conversation Analytics',
    'Target Caller-Ready Audiences',
    'Request A Demo'
]);
const listItem = sidebarArray.map((item) =>
    <li className="suggested-list">{item}</li>
);

const logo = <img src ="https://277y2d10y5kk16f38t1xjp9f-wpengine.netdna-ssl.com/wp-content/themes/ifbyphone/theme/images/logos/logo-dt-main.svg"></img>
class Nav extends Component {
    render() {
        return (
            <nav class="col-md-2 nopad">
            <div className="logo-container">
                {logo}
            </div>
                <ul>
                {listItem}
                </ul>
            </nav>
        );
    }
}

export default Nav