import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React, { Component } from 'react';


class CustomNav extends Component {    
    render() {
        return (
            <Navbar bg="dark">
                <Navbar.Brand>
                    <Nav.Link href="/" className="text-white">Banger Music</Nav.Link>
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                {this.props.isAuthenticated ? <span>Logged In!</span> : <span>Not logged in!</span>}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomNav;