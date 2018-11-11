import React, { Component } from 'react'
import Project from './Project'
import Search from './Search'
import {Table} from 'react-bootstrap'

const API = 'http://localhost:1434/projects';

class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
        this.filterList = this.filterList.bind(this);

    }  

    componentDidMount() {

        var fetchInit = {
          method: 'GET',
          cache: 'default'
        };
    
        fetch(API,fetchInit)
          .then(response => response.json())
          .then(data => this.setState({ items: data }));
      }

    filterList(text) {
        const data = this.state.items;
        var filteredList = data.filter(function (item) {
            return item.Description.toLowerCase().search(text.toLowerCase()) !== -1;
        });
        this.setState({ items: filteredList });
    }

    render() {

        return (
            <div>
                <Search filter={this.filterList} />
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>Description</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                            {
                                this.state.items.map(function (project) {
                                    return <Project key={project.ProjectId} project={project} />
                                })
                            }

                    </tbody>
                </Table>
            </div>
        )
    }
}

export default ProjectList




