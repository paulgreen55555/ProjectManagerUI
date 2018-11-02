import React, { Component } from 'react'
import Project from './Project'
import Data from './ProjectsListApi'
import Search from './ProjectSearch'
import {Table} from 'react-bootstrap'

class ProjectList extends Component {
    constructor(props) {
        const data = Data.projects;
        super(props);
        this.state = { items: Data.projects, itemsFullList: Data.projects };
        this.filterList = this.filterList.bind(this);

    }
    filterList(text) {
        if (text.length === 0) {
            return this.setState({ items: this.state.itemsFullList });
        }
        var filteredList = this.state.items.filter(function (item) {
            return item.description.toLowerCase().search(text.toLowerCase()) !== -1;
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
                                    return <Project key={project.id} project={project} />
                                })
                            }

                    </tbody>
                </Table>
            </div>
        )
    }
}

export default ProjectList




