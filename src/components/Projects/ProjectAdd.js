import React, { Component } from 'react'
import $ from 'jquery';

const PROJECT_ADD_API = "http://localhost:1434/projects";
export default class ProjectAdd extends Component {

    handleChange = event => {
        const a = event.target.name;
        this.setState({ [a]: event.target.value });
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
                    <label for="Name">Project Name:</label>
                    <input type="text" className="form-control" name="Name" />
                </div>
                <div className="form-group">
                    <label for="Description">Description:</label>
                    <input type="text" className="form-control" name="Description" />
                </div>
                <div className="form-group">
                    <label for="StartDate">Start Date:</label>
                    <input type="date" name="StartDate" />
                </div>
                <div className="form-group">
                    <label for="EndDate">End Date:</label>
                    <input type="date" name="EndDate" />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        );
    }
}


