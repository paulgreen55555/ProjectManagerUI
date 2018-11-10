import React, {Component} from 'react';

const API = 'http://localhost:1434/projects';

class StatisticModule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  componentDidMount() {

    var myInit = { method: 'GET',
               mode: 'no-cors',
               cache: 'default' };

    fetch(API,myInit)
      .then(response => response.json())
      .then(data => this.setState({ projects: data}));
  }

  render() {
    const { projects } = this.state;
    
    return (
      <ul>
        {projects.map(project =>
          <li key={project.ProjectId}></li>
        )}
      </ul>
    );
  }

}

export default StatisticModule