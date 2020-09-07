import React, { Component } from 'react';
import './GroupList.scss';
import Group from "../Group/Group";


class GroupList extends Component {
    constructor(props) {
        super(props);
        this.state = { groupt: null };
    }

    groupingHandleClick = () => {
        const url = 'http://localhost:8080/allGroups';
        const params = {
            method: 'GET',
        };
        fetch(url, params)
            .then((res) => res.json())
            .then((data) => this.setState({ groupt: data }));

    };

    render() {
        return (
            <div className="GroupList">
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

                    <div >
                {this.state.groupt?.map((group,index) => (
                    <Group key={index} group={group}  groupId={index} />  ))}
                    </div>
            </div>

        );
    }
}

export default GroupList;
