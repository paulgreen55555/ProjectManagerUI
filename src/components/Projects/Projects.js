import React, { Component } from 'react'
import ProjectGrid from './ProjectGrid'

class Projects extends Component {
    render() {
        return (
            <div>
                <h1>Projects</h1>
                <button>New project</button>
                <ProjectGrid />
            </div>
        )
    }
}

export default Projects

