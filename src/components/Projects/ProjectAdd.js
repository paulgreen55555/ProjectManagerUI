import React, { Component } from 'react'
import $ from 'jquery';

const PROJECT_ADD_API = "http://localhost:1434/projects";
class ProjectAdd extends Component {

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const formElement = document.getElementById("projectForm");
        const fulldata = $(formElement).serializeArray();
        const data = {};

        $.map(fulldata, function (n, i) {
            data[n['name']] = n['value'];
        });

        fetch(PROJECT_ADD_API, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }

    render() {
        return (
            <form id="projectForm" onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <div className="form-group">
                    <label>
                        Project Name:
                        <input type="text" className="form-control" name="Name" />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Description:
                        <input type="text" className="form-control" name="Description" />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Start Date:
                        <input type="date" name="StartDate" />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        End Date:
                        <input type="date" name="EndDate" />
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        );
    }
}

export default ProjectAdd


