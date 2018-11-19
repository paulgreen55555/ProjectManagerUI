import React, { Component } from 'react'
import Project from './Project'
import SearchInput from './SearchInput'
import { Table } from 'react-bootstrap'
import * as CONST from '../variables.js'


const tableHeaders = ["Project", "Description", "Start Date", "End Date", "Status", "Actions"];

class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = { projects: [] };
    }

    getDataFromApi = () => {

        let fetchInit = {
            method: 'GET',
        };

        fetch(CONST.PROJECT_API, fetchInit)
            .then(response => response.json())
            .then(data => {
                this.setState({ projects: data, projectList: data })
            });

    }

    componentDidMount() {
        this.getDataFromApi();
    }

    filterList = text => {
        let data = this.state.projectList;
        let filteredList = data.filter(function (item) {
            return item.Description.toLowerCase().search(text.toLowerCase()) !== -1;
        });
        this.setState({ projects: filteredList });
    }

    handleDelete = id => {
        const projects = this.state.projects.filter(p => p.ProjectId !== id);
        let fetchInit = {
            method: 'DELETE',
        };
        fetch(CONST.PROJECT_API + "/" + id, fetchInit).then(this.setState({ projects: projects }));
    }

    render() {
        return (
            <div>
                <SearchInput filter={this.filterList} placeholder="Search project" />
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            {tableHeaders.map(tbHead => <th key={tbHead}>{tbHead}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.projects.map(project =>
                                <Project
                                    key={project.ProjectId}
                                    project={project}
                                    onDelete={this.handleDelete}
                                />
                            )
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default ProjectList




