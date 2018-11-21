import React, { Component } from 'react'
import DatePicker from "react-datepicker"
import * as CONST from '../variables.js'
import $ from 'jquery';

class ProjectEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ProjectId: 0,
            Name: "",
            Description: "",
            ProjectStatus: "",
            StartDate: new Date(),
            EndDate: new Date(),
            Complete: false

        }

    }

    componentWillReceiveProps(props) {
        if (props.isOpen) {
            debugger;
            this.setState({
                ProjectId: props.project[0].ProjectId,
                Name: props.project[0].Name,
                Description: props.project[0].Description,
                ProjectStatus: props.project[0].ProjectStatus,
                StartDate: new Date(props.project[0].StartDate),
                EndDate: new Date(props.project[0].EndDate),
            })
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleStartDateChange = date => {
        this.setState({
            StartDate: date
        });
    }

    handleEndDateChange = date => {
        this.setState({
            EndDate: date
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const formElement = document.getElementById("projectEditForm");
        const fulldata = $(formElement).serializeArray();
        const data = {};

        $.map(fulldata, function (n, i) {
            data[n['name']] = n['value'];
        });

        data.ProjectStatus = data.ProjectStatus === "Open" ? 0 : 1;
        debugger;
        let fetchInit = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(CONST.PROJECT_API + "/" + this.state.id, fetchInit).then(
            $("#close_btn").click()


        );

    }

    render() {
        return (
            <form id="projectEditForm" onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <div id="editPopUp" className="modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit project</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <input type="text" name="ProjectId" hidden value={this.state.ProjectId} />
                                    <label className="w-100">
                                        Project Name:
                                        <input type="text" className="form-control" name="Name" defaultValue={this.state.Name} maxLength="256" required />
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label className="w-100">
                                        Description:
                                        <textarea className="form-control" name="Description" value={this.state.Description} />
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label className="w-100">
                                        <div>Status:</div>
                                        <select className="form-control" name="ProjectStatus" defaultValue={this.state.ProjectStatus}>
                                            <option>Open</option>
                                            <option>Close</option>
                                        </select>
                                    </label>
                                </div>

                                <div className="form-group">
                                    <label>
                                        <div>Start Date:</div>
                                        <DatePicker
                                            selected={this.state.StartDate}
                                            onChange={this.handleStartDateChange}
                                            dateFormat="dd-MM-yyyy"
                                            name="StartDate"
                                            required
                                        />
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label>
                                        <div>End Date:</div>
                                        <DatePicker
                                            selected={this.state.EndDate}
                                            onChange={this.handleEndDateChange}
                                            dateFormat="dd-MM-yyyy"
                                            name="EndDate"
                                            required
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary info">Save changes</button>
                                <button id="close_btn" type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form >
        )
    }
}

export default ProjectEdit

