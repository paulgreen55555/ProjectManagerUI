import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap'

const ProjectActionButtons = (props) => {
    return (
        <ButtonGroup>
            <Button bsStyle="warning" bsSize="small">Edit</Button>
            <Button bsStyle="info" bsSize="small" onClick={props.onClose}>Close</Button>
            <Button bsStyle="danger" bsSize="small" onClick={props.onDelete}>Delete</Button>
        </ButtonGroup>
    );
}

export default ProjectActionButtons;
