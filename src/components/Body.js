import React, {Component} from 'react'
import ProjectList from '../components/Projects/ProjectList'


class Body extends Component {
    state = {
        content: false
    }

    render() {
        return(
            <ProjectList />
        )
    }
}

export default Body

