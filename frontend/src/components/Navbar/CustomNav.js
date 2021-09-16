import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../../redux/actions/auth';
import { connect } from 'react-redux';


class CustomNav extends Component {
    render() {
        return (
            <Navbar bg="dark">
                <Navbar.Brand>
                    <Nav.Link href="/" className="text-white">Banger Music</Nav.Link>
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end pr-3">
                {this.props.isAuthenticated ? <button className="text-white" onClick={this.props.logout}>Logout</button> : <Nav.Link href="/login/" className="text-white">Login</Nav.Link> }
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  }
}

export default connect(null, mapDispatchToProps)(CustomNav);