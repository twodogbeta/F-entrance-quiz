import React, { Component } from 'react'
import './Header.scss'

class Header extends Component{
    groupingHandleClick = () => {
        const url = 'http://localhost:8080//allTrainees';
        const params = {
            method: 'GET',
        };
        fetch(url, params).then(() => console.log('ok'));
    };

    render() {
        return (
            <div className="Header">
                <div>
                    <span>分组列表</span>
                </div>
                <div>
                    <button type="button" onClick={this.groupingHandleClick}>
                        分组学员
                    </button>
                </div>
            </div>
        );
    }
}

export default Header;