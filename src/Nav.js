import React, { Component } from 'react';
import './App.css'

const sidebarArray = [
    {icon:'http://www.dialogtech.com/wp-content/themes/ifbyphone/theme/images/media-center/icons/white/blog.svg', type: 'ebook', title: 'The Digital Marketers Playbook for Voice Analytics', url: 'https://www.dialogtech.com/customer-success'},
    {icon:'http://www.dialogtech.com/wp-content/themes/ifbyphone/theme/images/media-center/icons/white/case-study.svg', type: 'webinar', title: 'Optimize Google Ads, LinkedIn & Facebook ROI with Voice Analytics', url: 'https://www.dialogtech.com'},
    {icon:'http://www.dialogtech.com/wp-content/themes/ifbyphone/theme/images/media-center/icons/white/ebook.svg', type: 'blog', title: '6 AI-Based Call Reports That Will Transform Your Digital Marketing ROI', url: 'https://www.dialogtech.com/careers'},
    {icon:'http://www.dialogtech.com/wp-content/themes/ifbyphone/theme/images/media-center/icons/white/infographic.svg', type: 'product', title: 'AI-Powered Conversation Analytics', url: 'https://www.dialogtech.com/press'},
    {icon:'http://www.dialogtech.com/wp-content/themes/ifbyphone/theme/images/media-center/icons/white/webinar-live.svg', type: 'tip', title: 'Target Caller-Ready Audiences', url: 'https://www.dialogtech.com/about'},
    {icon:'http://www.dialogtech.com/branding/icons/repo/white/ai.svg', title: 'Request A Demo', url: 'https://www.dialogtech.com/request-demo'}
  ];
const listItem = sidebarArray.map((item) =>
    <div className="suggested-list list-content"><img src={item.icon}></img><span className="type">{item.type}</span><a href={item.url}>{item.title}</a></div>
);
const logo = <img src ="https://277y2d10y5kk16f38t1xjp9f-wpengine.netdna-ssl.com/wp-content/themes/ifbyphone/theme/images/logos/logo-dt-main.svg"></img>
class Nav extends Component {
    render() {
        return (
            <nav class="col-md-2 nopad">
                <div className="logo-container">
                    {logo}
                </div>
                <div>
                    <ul className="list">
                        <li className="list-item">
                            {listItem}
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav