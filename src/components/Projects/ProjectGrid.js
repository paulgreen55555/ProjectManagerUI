import React, {Component} from 'react';
import ProjectList from './ProjectList'


class ProjectGrid extends Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        return(
        <div>
            <ProjectList/>
        </div>
        )
    }
}

export default ProjectGrid