import React, { Component } from 'react'
import './Header.scss'

class Header extends Component{
    render() {
        return (
            <div className="Header">
                <div>
                    <span>分组列表</span>
                </div>
                <div>
                    <button type="button">分组学员</button>
                </div>
            </div>
        );
    }
}

export default Header;