import React, { Component } from 'react'
import Modal from 'react-modal'
import { Button } from 'react-bootstrap'

class ProjectEdit extends Component {
    constructor() {
        super();
        this.state = {
            isModalNewProjectOpen: false
        }
    }
    handleClose = () => {
        this.setState({ isModalNewProjectOpen: false });
    }

    render() {

        return (
            <Modal isOpen={this.state.isModalNewProjectOpen} >
                <div>Modal window</div>
                <Button bsStyle="success" onClick={this.handleClose}>Close</Button>
            </Modal>
        )
    }
}

export default ProjectEdit

