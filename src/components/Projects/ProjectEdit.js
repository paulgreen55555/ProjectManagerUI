import React, { Component } from 'react'
import ProjectGrid from './ProjectGrid'

class ProjectEdit extends Component {
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

export default ProjectEdit

