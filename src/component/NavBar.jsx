import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <NavLink to={'/'}>Dragon</NavLink>
            <NavLink to={'/knight'}>Knight</NavLink>
            <NavLink to={'/couple'}>Couples</NavLink>
        </nav>
    );
};

export default NavBar;