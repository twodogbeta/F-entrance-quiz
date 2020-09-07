import React, { Component } from 'react';
import Trainee from '../Trainee/Trainee';
import './Group.scss';

class Group extends Component {
    render() {
        const groupId = this.props.groupId + 1;
        return (
            <div className="group">
                <div className="groupHeader">
                    <span>Team {groupId}</span>
                </div>
                <div className="groupMain">
                    {this.props.group.traineeList.map((trainee) => (
                        <Trainee key={trainee.id} traineeId={trainee.id} traineeName={trainee.name} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Group;
