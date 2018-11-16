import React, { Component } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

class ProjectActionButtons extends Component {
    render() {
        return (
            <div>
                <ButtonGroup>
                    <Button bsStyle="warning" bsSize="small">Edit</Button>
                    <Button bsStyle="info" bsSize="small">Close</Button>
                    <Button bsStyle="danger" bsSize="small">Delete</Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default ProjectActionButtons