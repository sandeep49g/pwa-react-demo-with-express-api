import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap'
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'

import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
    const [mode, setMode] = useState(window.navigator.onLine ? 'online' : 'offline');

    useEffect(() => {
        window.addEventListener('online', () => setMode('online'));
        window.addEventListener('offline', () => setMode('offline'));
    }, []);

    return (
        <div className="App">
        <Router>            
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/users">Users</Link>
                </Nav>
            </Navbar>
            <div>
                {
                    mode === 'offline' && (
                        <div className="alert alert-warning" role="alert">
                            you are in offline mode or some issue with connection
                        </div>
                    )
                }
            </div>
            <Switch>
                <Route path="/about" component={About} ></Route>
                <Route path="/users" component={Users} ></Route>
                <Route path="/home" component={Home} ></Route>
                <Route path="/" eaxct component={Home} ></Route>
            </Switch>
        </Router>
        </div>
    );
}

export default App;
