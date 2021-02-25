import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className='Sidebar p-4 text-center'>
            <div className='logo my-4'>
                <h2>David Guzman</h2>
            </div>
            <Nav className=' nav d-flex flex-column align-items-center' vertical>
                <NavLink disabled href='#'>
                    Colors
                </NavLink>{' '}
                <NavLink disabled href='#'>
                    Typography
                </NavLink>{' '}
                <NavLink disabled href='#'>
                    Spaces
                </NavLink>{' '}
                <NavLink href='#'>Buttons</NavLink>{' '}
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
