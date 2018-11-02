import React, { Component } from 'react'
import ProjectActionsButtons from './ProjectActionsButtons'

class Project extends Component {
    render() {
        const { project } = this.props
        return (
            <tr>
                <td>{project.title}</td>
                <td>{project.description}</td>
                <td>{project.startDate}</td>
                <td>{project.endDate}</td>
                <td>{project.status}</td>
                <td><ProjectActionsButtons/></td>
            </tr>
        )
    }
}

export default Project

