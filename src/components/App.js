import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router, Route} from "react-router-dom";

const Index = () => <h2>Home</h2>;
const Projects = () => <h2>Projects</h2>;
const Users = () => <h2>Users</h2>;

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Route path="/" exact component={Index} />
                <Route path="/projects/" component={Projects} />
                <Route path="/users/" component={Users} />
                <Footer/>
            </div>
        </Router>
    )
}

export default App

