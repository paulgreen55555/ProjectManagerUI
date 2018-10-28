import React, {Component} from 'react'

class Project extends Component {
    render() {
        const {project} = this.props
        return(
                <li>{project.description}</li>
        )
    }
}

export default Project

  