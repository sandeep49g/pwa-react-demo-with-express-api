import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import MyProfile from './components/MyProfile/index';
import EmployeesList from './components/EmployeesList/index';
import TeamStructure from './components/TeamStructure/index';
import EmployeeProfile from './components/EmployeeProfile/index';
import './App.css';

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
                        Publicis Sapient
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link as={NavLink} to="/my-profile" exact>
                            My Profile
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/my-team">
                            My Team
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/team-structure">
                            Team Structure
                        </Nav.Link>
                    </Nav>
                </Navbar>
                <If condition={mode === 'offline'}>
                    <div className="alert alert-warning mb-0" role="alert">
                        You are in offline mode or some issue with connection
                    </div>
                </If>
                <Switch>
                    <Route path="/my-profile" component={MyProfile} ></Route>
                    <Route path="/my-team" component={EmployeesList} ></Route>
                    <Route path="/team-structure" component={TeamStructure} ></Route>
                    <Route path='/emp-profile/:empId' exact component={EmployeeProfile} />
                    <Route path="/" eaxct component={MyProfile} ></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
