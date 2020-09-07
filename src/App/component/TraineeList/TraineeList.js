import React, { Component } from 'react';
import './TraineeList.scss';
import Trainee from '../Trainee/Trainee';

class TraineeList extends Component {
    constructor(props) {
        super(props);
        this.state = { trainees: null };
    }

    componentDidMount() {
        const url = 'http://localhost:8080/allTrainees';
        const params = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        };
        fetch(url, params)
            .then((res) => res.json())
            .then((data) => this.setState({ trainees: data }));
    }

    render() {
        return (
            <div className="TraineeList">
                <div className="TraineeHeader">
                    <div>
                        <span>学员列表</span>
                    </div>
                </div>
                <div className="TraineeListDisplay">
                    {this.state.trainees?.map((trainee) => (
                        <Trainee key={trainee.id} traineeId={trainee.id} traineeName={trainee.name} />
                    ))}
                </div>
            </div>
        );
    }
}

export default TraineeList;
