import React, { Component } from 'react'
import ProjectList from './ProjectList'
import ProjectAddBtn from './ProjectAddBtn'

const title = "Projects";

class Projects extends Component {

    render() {
        return (
            <div>
                <h1>{title}</h1>
                <ProjectAddBtn />
                <ProjectList />
            </div>
        )
    }
}

export default Projects


