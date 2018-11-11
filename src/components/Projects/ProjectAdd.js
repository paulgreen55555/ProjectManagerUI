import React, { Component } from 'react'

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
        this.setState({ [a] : event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        debugger;

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                <label>
                    Project Name:
              <input name="Name" type="text" value={this.state.Name} />
                </label>
                <label>
                    Description:
              <input name="Description" type="text" value={this.state.Description} />
                </label>
                <label>
                    Start date:
              <input name="StartDate" type="date" value={this.state.StartDate} onChange={this.handleChange} />
                </label>

                <input type="submit" value="Save" />
            </form>
        );
    }
}


