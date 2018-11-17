import React, { Component } from 'react'
import ProjectList from './ProjectList'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

class Projects extends Component {
    render() {
        return (
            <div>
                <h1>Projects</h1>
                <div className="row">
                    <div className="col-lg-2 col-lg-push-10 col-md-2 col-md-push-0 col-sm-2 col-sm-push-0 col-xs-2 col-xs-push-0">
                        <div className="m-2">
                            <Link to="/project-add">
                                <Button bsStyle="success">+ New project</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <ProjectList />
            </div>
        )
    }
}

export default Projects

