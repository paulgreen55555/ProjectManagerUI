import React, { Component } from 'react'
import ProjectActionsButtons from './ProjectActionsButtons'

class Project extends Component {
    render() {
        const { ProjectId, Name, Description, StartDate, EndDate, ProjectStatus } = this.props.project
        return (
            <tr>
                <td>{Name}</td>
                <td>{Description}</td>
                <td>{StartDate}</td>
                <td>{EndDate}</td>
                <td>{ProjectStatus === 0 ? "Open" : "Close"}</td>
                <td>
                    <ProjectActionsButtons
                        onDelete={() => this.props.onDelete(ProjectId)}
                        onClose={() => this.props.onClose(ProjectId)}
                    />
                </td>
            </tr>
        )
    }
}

export default Project

