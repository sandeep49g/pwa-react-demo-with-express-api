import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

function App() {
    const [mode, setMode] = useState(window.navigator.onLine ? 'online' : 'offline');

    useEffect(() => {
        window.addEventListener('online', () => setMode('online'));
        window.addEventListener('offline', () => setMode('offline'));
    }, []);

    return (
        <div className="AppContainer">
            <Router>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand as={NavLink} to="/">
                        PWA Demo
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link as={NavLink} to="/" exact>
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/about">
                            About
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/users">
                            Users
                        </Nav.Link>
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
                    {/* <If condition={mode === 'offline'}>
                        <div className="alert alert-warning" role="alert">
                            You are in offline mode or some issue with connection
                        </div>
                    </If> */}
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
