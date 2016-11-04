import React from 'react';
import NavLink from './NavLink'
import { IndexLink } from 'react'
var Menu = React.createClass({
    render () {
        return (
            <div className="comment">
                <ul>
                    <li><NavLink to="menu/test">test</NavLink></li>
                    <li><NavLink to="menu/test1">test1</NavLink></li>
                    <li><NavLink to="menu/test2">test2</NavLink></li>
                    <li><NavLink to="menu/reactjs/react">react router</NavLink></li>
                    <li><NavLink to="/" onlyActiveOnIndex={true}>home</NavLink></li>
                </ul>
                {this.props.children || "Welcome to your Inbox"}
            </div>
        )
    }
});

export default Menu;
