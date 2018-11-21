import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

class ProjectAddBtn extends Component {
    render() {
        return (
            <div className="float-right mb-2">
                <Link to="/project-add">
                    <Button bsStyle="success">+ New project</Button>
                </Link>
            </div>

        );
    }
}

export default ProjectAddBtn;
