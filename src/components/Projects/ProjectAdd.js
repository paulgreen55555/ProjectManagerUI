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
        }).then(this.setState({ complete: true }));

    }

    handleCancel = () => {this.setState({ complete: true })}

    render() {
        if (this.state.complete) {
            return (
                <Redirect to="/projects" />
            )
        }
        return (
            <form id="projectForm" onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <div className="form-group">
                    <label className="w-100">
                        Project Name:
                        <input type="text" className="form-control" name="Name" maxLength="256" required />
                    </label>
                </div>
                <div className="form-group">
                    <label className="w-100">
                        Description:
                        <textarea type="text" className="form-control" name="Description"/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        <div>Start Date:</div>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleStartDateChange}
                            dateFormat="dd-MM-yyyy"
                            minDate={new Date()}
                            name="StartDate"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        <div>End Date:</div>
                        <DatePicker
                            selected={this.state.endDate}
                            onChange={this.handleEndDateChange}
                            dateFormat="dd-MM-yyyy"
                            minDate={new Date()}
                            name="EndDate"
                        />
                    </label>
                </div>
                <div className="w-25">
                    <button type="submit" className="btn btn-block btn-success">Save New Project</button>
                    <button className="btn btn-block btn-warning" onClick={this.handleCancel}>Cancel</button>
                </div>
            </form>
            
        );
    }
}

export default ProjectAdd


