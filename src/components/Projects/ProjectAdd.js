import React, { Component } from 'react'
import $ from 'jquery';

const PROJECT_ADD_API = "http://localhost:1434/projects";
export default class ProjectAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Description: '',
            StartDate: '',

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const a = event.target.name;
        this.setState({ [a]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const formElement = document.getElementById("projectForm");

        var fulldata = $(formElement).serializeArray();
        var data = {};

        $.map(fulldata, function(n, i){
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

        debugger;

    }

    render() {
        return (
            <form id="projectForm" onSubmit={this.handleSubmit} onChange={this.handleChange} >
                <label>
                    Project Name:
              <input name="Name" type="text" value={this.state.Name} />
                </label>
                <label>
                    Description:
              <input name="Description" type="text" value={this.state.Description} />
                </label>
                <label>
                    OwnerId:
              <input name="OwnerId" type="text" value={this.state.OwnerId} />
                </label>
                <label>
                    Start date:
              <input name="StartDate" type="date" value={this.state.StartDate} onChange={this.handleChange} />
                </label>
                <label>
                    End date:
              <input name="EndDate" type="date" value={this.state.EndDate} onChange={this.handleChange} />
                </label>
                <label>
                    Close date:
              <input name="CloseDate" type="date" value={this.state.CloseDate} onChange={this.handleChange} />
                </label>


                <input type="submit" value="Save" />
            </form>
        );
    }
}


