import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import Dashboard from './Dashboard/Dashboard.js'
import Projects from './Projects/Projects.js'


const Users = () => <h2>Users</h2>;

function App() {
    return (
        <Router>
            <div className="container">
                <Header />
                <Route path="/" exact component={Dashboard} />
                <Route path="/projects/" component={Projects} />
                <Route path="/users/" component={Users} />
                <Footer/>
            </div>
        </Router>
    )
}

export default App

