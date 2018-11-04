import React, { Component } from 'react'
import ProjectGrid from './ProjectGrid'
import { Button } from 'react-bootstrap'
import ProjectEdit from './ProjectEdit'

class Projects extends Component {
    constructor() {
        super();
        this.state = { isModalNewProjectOpen: false };
    }
    handleNewProjAdd = () => {
        this.setState({ isModalNewProjectOpen: true });
    }
    
    render() {
        return (
            <div>
                <h1>Projects</h1>
                <div className="row">
                    <div className="col-lg-2 col-lg-push-10 col-md-2 col-md-push-0 col-sm-2 col-sm-push-0 col-xs-2 col-xs-push-0">
                        <div className="pull-right"><Button bsStyle="success" onClick={this.handleNewProjAdd}> + New project</Button></div>
                        <ProjectEdit isOpen={this.state.isModalNewProjectOpen}></ProjectEdit>
                    </div>
                </div>
                <ProjectGrid />
            </div>
        )
    }
}

export default Projects

