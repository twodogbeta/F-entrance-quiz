import React, { Component } from 'react';
import TraineeList from "../TraineeList/TraineeList";
import GroupList from "../GroupList/GroupList";

class MainContent extends Component {


    render() {
        return (
            <div>
                <GroupList/>
                <TraineeList/>
            </div>

        )
    }
}

export default MainContent;