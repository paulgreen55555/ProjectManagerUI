import React, { Component } from 'react'
import ProjectActionsButtons from './ProjectActionsButtons'
import * as CONST from '../variables.js'

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { status: props.project.ProjectStatus };
    }

    handleClose = id => {
        let data = this.props.project;
        data.ProjectStatus = 1;

        let fetchInit = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(CONST.PROJECT_API + "/" + id, fetchInit).then(this.setState({ status: 1 }));

    }

    getDate = (date) => {
        const fullDate = new Date(Date.parse(date));
        return fullDate.getDate() + "-" +  fullDate.getMonth() + "-" + fullDate.getFullYear()  
    }

    render() {
        const { ProjectId, Name, Description, StartDate, EndDate, ProjectStatus } = this.props.project
        return (
            <tr>
                <td>{Name}</td>
                <td>{Description}</td>
                <td>{this.getDate(StartDate)}</td>
                <td>{this.getDate(EndDate)}</td>
                <td>{this.state.status === 0 ? "Open" : "Close"}</td>
                <td>
                    <ProjectActionsButtons
                        onDelete={() => this.props.onDelete(ProjectId)}
                        onClose={this.handleClose}
                        isClose={ProjectStatus}
                    />
                </td>
            </tr>
        )
    }
}

export default Project

