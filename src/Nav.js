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
const listItem = sidebarArray.map((i) =>
    <li>{i}</li>
);

class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                {listItem}
                </ul>
            </nav>
        );
    }
}

export default Nav