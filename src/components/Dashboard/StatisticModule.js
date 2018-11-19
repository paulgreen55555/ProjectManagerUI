import React, { Component } from 'react';
import * as CONST from '../variables.js'

class StatisticModule extends Component {
  constructor() {
    super();

    this.state = {
      projectsCount: 0
    };
  }

  componentDidMount() {

    var fetchInit = {
      method: 'GET',
      cache: 'default'
    };

    fetch(CONST.PROJECT_API,fetchInit)
      .then(response => response.json())
      .then(data => this.setState({ projectsCount: data.length }));
  }

  render() {

    return (
      <div>Project count - {this.state.projectsCount}</div>
    );
  }

}

export default StatisticModule