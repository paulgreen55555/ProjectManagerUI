import React, { Component } from 'react'
import Modal from 'react-modal'
import { Button } from 'react-bootstrap'

class ProjectEdit extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }
    
    handleClose = () => {
        this.setState({ isOpen: false });
    }

    render() {

        return (
            <Modal isOpen={this.state.isOpen} >
                <div>Modal window</div>
                <Button bsStyle="success" onClick={this.handleClose}>Close</Button>
            </Modal>
        )
    }
}

export default ProjectEdit

