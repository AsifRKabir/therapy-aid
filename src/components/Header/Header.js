import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import './Header.css';

const Header = () => {
    return (
        // <Navbar bg="white" expand="lg">
        //     <Container fluid>
        //         <Navbar.Brand as={Link} to='/'>
        //             <img className="logo" src={logo} alt="" /> THERAPY AID
        //         </Navbar.Brand>

        //         <Navbar.Toggle aria-controls="navbarScroll" />
        //         <Navbar.Collapse id="navbarScroll">
        //             <Nav className="ms-auto my-2 my-lg-0 "
        //                 style={{ maxHeight: '100px' }}
        //                 navbarScroll>
        //                 <Nav.Link as={Link} to='/'>Home</Nav.Link>
        //                 <Nav.Link as={Link} to='/services'>Services</Nav.Link>
        //                 <Nav.Link as={Link} to='/about'>About</Nav.Link>
        //                 <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar >

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                    <img className="logo" src={logo} alt="" /> Therapy Aid
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" to='/'>Home</Link>
                        <Link className="nav-link" to='/services'>Services</Link>
                        <Link className="nav-link" to='/about'>About</Link>
                        <Link className="nav-link" to='/contact'>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;