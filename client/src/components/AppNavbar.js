import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

const AppNavbar = () => {
    return(
        <Navbar color='light'>
            <NavbarBrand>Quiz Coach</NavbarBrand>
            <Nav className='ml-auto'>
                <NavItem>
                    <NavLink href='/quiz'>Quiz</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/stats'>Stats</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/'>Log Out</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default AppNavbar;