import React, { Component } from 'react'
import Project from './Project'
import SearchInput from './Search'
import { Table } from 'react-bootstrap'

const API = 'http://localhost:1434/projects';
const tableHeaders = ["Project", "Description", "Start Date", "End Date", "Status", "Actions"];

class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = { projects: [] };
    }

    componentDidMount() {

        let fetchInit = {
            method: 'GET',
            cache: 'default'
        };

        fetch(API, fetchInit)
            .then(response => response.json())
            .then(data => this.setState({ projects: data }));
    }

    filterList = text => {
        let data = this.state.projects;
        let filteredList = data.filter(function (item) {
            return item.Description.toLowerCase().search(text.toLowerCase()) !== -1;
        });
        this.setState({ projects: filteredList });
    }

    render() {

        return (
            <div>
                <SearchInput filter={this.filterList} placeholder="Search project" />
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            {tableHeaders.map(tbH => <th key={tbH}>{tbH}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.projects.map(project => <Project key={project.ProjectId} project={project} />)
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default ProjectList




