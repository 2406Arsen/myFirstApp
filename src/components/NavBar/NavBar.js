    import React from 'react'
    // import {Link} from 'react-router-dom'
    import {NavLink} from 'react-router-dom'
const NavBar = () => {
    const styleActive = {
        color : 'green' ,
        textDecoration : 'none',
        fontSize : '20px'
    }
    return (
        <nav>
            <ul>
                <li><NavLink to="/home" activeStyle={styleActive}>Home</NavLink></li>
                <li><NavLink to="/list" activeStyle={styleActive}>List</NavLink></li>
                <li><NavLink to="/about" activeStyle={styleActive}>About</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar