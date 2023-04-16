import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

//bootstrap
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function NavBar() {
    return (
        <div>
            <Wrap>
                <Navbar expand="lg">
                    <Container>
                        <Link to={'/'} id="navLogo">
                            <Navbar.Brand>Glass & lens</Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link id="Nav.Link" to={'/'}>
                                    Home
                                </Link>
                                <Link id="Nav.Link" to={'/about/guest'}>
                                    My Page
                                </Link>
                                <Link id="Nav.Link" to={'/cart'}>
                                    Cart
                                </Link>
                                <Link id="Nav.Link" to={'/abc1234'}>
                                    Error page
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Wrap>
        </div>
    )
}

export default NavBar

const Wrap = styled.div`
    .NavBar {
        background-color: white;
    }

    .navbar-brand {
        margin-right: 40px;
    }

    .navbar-toggler {
        border: 0;
    }

    .navbar-toggler:focus {
        box-shadow: none;
    }
`
