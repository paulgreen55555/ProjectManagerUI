import React, { Component } from 'react'
import ProjectGrid from './ProjectGrid'
import { Button } from 'react-bootstrap'
import ProjectSearch from './ProjectSearch'

class Projects extends Component {
    render() {
        return (
            <div>

                <h1>Projects</h1>

 
                    <div class="row">
                        <div class="col-lg-2 col-lg-push-10 col-md-2 col-md-push-0 col-sm-2 col-sm-push-0 col-xs-2 col-xs-push-0">
                            <div class="pull-right"><Button bsStyle="success"> + New project</Button></div>
                        </div>
                    </div>

                <ProjectGrid />
            </div>
        )
    }
}

export default Projects

