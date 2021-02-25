import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Sidebar = () => {
    return (
        <div className='Sidebar d-flex flex-column mx-4 text-center align-items-start'>
            <div className='logo'>
                <h2>David Guzman</h2>
            </div>
            <Nav className='d-flex flex-column align-items-center' vertical>
                <NavLink disabled href='#'>
                    Colors
                </NavLink>{' '}
                <NavLink disabled href='#'>
                    Typography
                </NavLink>{' '}
                <NavLink disabled href='#'>
                    Spaces
                </NavLink>{' '}
                <NavLink  href='#'>
                    Buttons
                </NavLink>{' '}
                <NavLink disabled href='#'>
                    Inputs
                </NavLink>{' '}
                <NavLink disabled href='#'>
                    Grid
                </NavLink>{' '}
            </Nav>
        </div>
    );
};

export default Sidebar;
