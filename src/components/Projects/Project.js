import React, { Component } from 'react'
import ProjectActionsButtons from './ProjectActionsButtons'

class Project extends Component {
    render() {
        const { project } = this.props
        return (
            <tr>
                <td>{project.Name}</td>
                <td>{project.Description}</td>
                <td>{project.StartDate}</td>
                <td>{project.EndDate}</td>
                <td>{project.ProjectStatus}</td>
                <td><ProjectActionsButtons/></td>
            </tr>
        )
    }
}

export default Project

