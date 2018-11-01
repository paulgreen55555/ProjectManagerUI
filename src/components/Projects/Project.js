import React, { Component } from 'react'

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
            </tr>
        )
    }
}

export default Project

