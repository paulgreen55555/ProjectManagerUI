import React, { Component } from 'react'
import $ from 'jquery';
import DatePicker from "react-datepicker";
import { Redirect } from 'react-router-dom'


const PROJECT_ADD_API = "http://localhost:1434/projects";
class ProjectAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            complete: false

        };
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleStartDateChange = date => {
        this.setState({
            startDate: date
        });
    }

    handleEndDateChange = date => {
        this.setState({
            endDate: date
        });
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
        }).then(this.setState({complete: true}));

    }

    render() {
        if (this.state.complete) {
            return (
                <Redirect to="/projects" />
            )
        }
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
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleStartDateChange}
                            dateFormat="dd-MM-yyyy"
                            name="StartDate"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        End Date:
                        <DatePicker
                            selected={this.state.endDate}
                            onChange={this.handleEndDateChange}
                            dateFormat="dd-MM-yyyy"
                            name="EndDate"
                        />
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        );
    }
}

export default ProjectAdd


