import React, { Component } from 'react';

const API = 'http://localhost:1434/projects';

class StatisticModule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  componentDidMount() {

    var fetchInit = {
      method: 'GET',
      cache: 'default'
    };

    fetch(API,fetchInit)
      .then(response => response.json())
      .then(data => this.setState({ projects: data }));
  }

  render() {
    const { projects } = this.state;

    return (
      <div>Project count - {projects.length}</div>
    );
  }

}

export default StatisticModule