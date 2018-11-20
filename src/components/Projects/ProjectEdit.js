import React, { Component } from 'react'
import DatePicker from "react-datepicker";

class ProjectEdit extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const { Name, Description, StartDate, EndDate, ProjectStatus } = this.props.project
        
        return (
            <form id="projectForm" onSubmit={this.handleSubmit} onChange={this.handleChange}>
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
                                    <label className="w-100">
                                        Project Name:
                                        <input type="text" className="form-control" name="Name" value={this.props.project.Name} maxLength="256" required />
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label className="w-100">
                                        Description:
                                        <textarea type="text" className="form-control" name="Description" />
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label className="w-100">
                                        <div>Status:</div>
                                        <select className="form-control" name="ProjectStatus" value={this.props.project.Status}>
                                            <option>Open</option>
                                            <option>Close</option>
                                        </select>
                                    </label>
                                </div>

                                <div className="form-group">
                                    <label>
                                        <div>Start Date:</div>
                                        <DatePicker
                                            selected={this.props.project.startDate}
                                            onChange={this.handleStartDateChange}
                                            dateFormat="dd-MM-yyyy"
                                            name="StartDate"
                                        />
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label>
                                        <div>End Date:</div>
                                        <DatePicker
                                            selected={this.props.project.startDate}
                                            onChange={this.handleEndDateChange}
                                            dateFormat="dd-MM-yyyy"
                                            name="EndDate"
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary info">Save changes</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form >
        )
    }
}

export default ProjectEdit

