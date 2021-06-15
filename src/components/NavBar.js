import React from 'react'
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

export default function NavBar(props) {
    return (
        <div className='navigation'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="/"><img src='https://www.neurocat.ai/wp-content/uploads/2018/11/neurocat_website_logo.png'
                    alt='logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto navlinks" >
                        <Link to='/'>Home</Link>
                        <Link to='/products'>Products</Link>
                        <Link to='/resources'>Resources</Link>
                        <Link to='/team'>Team</Link>
                        <Link to='/careers'>Careers</Link>
                        <a href='#contact'>Contact</a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
