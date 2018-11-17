import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap'

const ProjectActionButtons = () => {
    return (
        <ButtonGroup>
            <Button bsStyle="warning" bsSize="small">Edit</Button>
            <Button bsStyle="info" bsSize="small">Close</Button>
            <Button bsStyle="danger" bsSize="small">Delete</Button>
        </ButtonGroup>
    );
}

export default ProjectActionButtons;
