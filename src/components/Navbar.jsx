//import {useState} from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
    return (
        <nav className='text-lg'>
            <ul className='flex flex-row gap-10 pl-20'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/forum'>Forum</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;