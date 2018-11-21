import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap'

const ProjectActionButtons = (props) => {
    return (
        <ButtonGroup>
            <Button bsStyle="info" bsSize="small" data-toggle="modal" data-target="#editPopUp" onClick={props.onEdit}>Edit</Button>
            {props.isClose === 0 && <Button bsStyle="warning" bsSize="small" onClick={props.onClose}>Close</Button>}
            <Button bsStyle="danger" bsSize="small" onClick={props.onDelete}>Delete</Button>
        </ButtonGroup>
    );
}

export default ProjectActionButtons;
