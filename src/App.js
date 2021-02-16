import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch, NavLink, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import MyProfile from './components/MyProfile/index';
import EmployeesList from './components/EmployeesList/index';
import TeamStructure from './components/TeamStructure/index';
import EmployeeProfile from './components/EmployeeProfile/index';
import firebase from './firebase';
import './App.css';

function App() {
    const [mode, setMode] = useState(window.navigator.onLine ? 'online' : 'offline');

    const routeActiveLinkMap = {
        '/': 'myProfileLink',
        '/my-profile': 'myProfileLink',
        '/my-team': 'myTeamLink',
        '/team-structure': 'teamStructureLink',
    };

    const toggleMobileNavLinks = () => {
        const mobileNavLinks = document.getElementById("mobileNavLinks");
        mobileNavLinks.style.display =
            (mobileNavLinks.style.display === "block") ? "none" : "block";
    };
    
    const activateLink = (elementId) => {
        const myProfileLink = document.getElementById("myProfileLink");
        const myTeamLink = document.getElementById("myTeamLink");
        const teamStructureLink = document.getElementById("teamStructureLink");
        myProfileLink.classList.remove('active');
        myTeamLink.classList.remove('active');
        teamStructureLink.classList.remove('active');
        const activeElement = document.getElementById(elementId);
        activeElement.classList.add('active');
    }

    const activateRouteLink = () => {
        const currentRoutePath = window.location.pathname;
        Object.entries(routeActiveLinkMap).forEach(([routePath, activeLinkElement]) => {
            if (currentRoutePath.includes(routePath)) {
                activateLink(activeLinkElement);
                return false;
            }
        });
    }

    const addEventListeners = (eventNames) => {
        const navbarContainerElement = document.getElementById('navbarContainer');
        eventNames.forEach(eventName => {
            window.addEventListener(eventName, (event) => {
                const isClickInsidenavbarContainerElement = navbarContainerElement.contains(event.target);
                if (!isClickInsidenavbarContainerElement) {
                    const mobileNavLinks = document.getElementById("mobileNavLinks");
                    mobileNavLinks.style.display = 'none';
                    activateRouteLink();
                }
            });
        });
    };
    
    useEffect(() => {
        activateRouteLink();

        // addEventListeners(['mousemove', 'touchmove']);
        addEventListeners(['click']);

        window.addEventListener('online', () => setMode('online'));
        window.addEventListener('offline', () => setMode('offline'));
        
        if (window.Notification.permission === 'granted') {
            const firebaseMsg = firebase.messaging();
            window.Notification.requestPermission().then(() => {
                return firebaseMsg.getToken();
            })
            .then(token => {
                console.log("Firebase Token: ", token);
            })
            .catch(err => {
                console.log(err);
            });
        }      
    }, []);    

    return (
        <div className="app-container">
            <Router>
                <div className="navbar-container" id="navbarContainer">
                    <div className="normal-navbar">
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand as={NavLink} to="/"
                            onClick={() => activateLink('myProfileLink')}>
                            PWA Demo
                        </Navbar.Brand>
                        <Nav>
                            <Nav.Link as={NavLink} to="/" exact
                                onClick={() => activateLink('myProfileLink')}>
                                My Profile
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/my-team"
                                onClick={() => activateLink('myTeamLink')}>
                                My Team
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/team-structure"
                                onClick={() => activateLink('teamStructureLink')}>
                                Team Structure
                            </Nav.Link>
                        </Nav>
                    </Navbar>
                </div>
                    <div className="mobile-navbar bg-dark" id="mobileNavbar">
                        <div className="navbar-brand"
                            onClick={() => activateLink('myProfileLink')}>
                            <Link to="/" className="navbar-brand-title">
                                PWA Demo
                            </Link>
                        </div>
                        <div id="mobileNavLinks">
                            <Link to="/" id="myProfileLink"
                                onClick={() => activateLink('myProfileLink')}>
                                My Profile
                            </Link>
                            <Link to="/my-team" id="myTeamLink"
                                onClick={() => activateLink('myTeamLink')}>
                                My Team
                            </Link>
                            <Link to="/team-structure" id="teamStructureLink"
                                onClick={() => activateLink('teamStructureLink')}>
                                Team Structure
                            </Link>
                        </div>
                        <a className="icon" onClick={toggleMobileNavLinks}>
                            <i className="fa fa-bars"></i>
                        </a>
                    </div>
                </div>
                <div className="route-component-container" id="routeComponentContainer">
                    <If condition={mode === 'offline'}>
                        <div className="alert alert-warning mb-0" role="alert">
                            You are in offline mode or some issue with connection
                        </div>
                    </If>
                    <Switch>
                        <Route path="/my-profile" component={MyProfile} ></Route>
                        <Route path='/my-team/:employeeId' exact component={EmployeeProfile} />
                        <Route path="/my-team" component={EmployeesList} ></Route>
                        <Route path="/team-structure" component={TeamStructure} ></Route>
                        <Route path="/" eaxct component={MyProfile} ></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
