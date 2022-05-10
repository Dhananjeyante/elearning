import React from 'react'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'
import App from '../App';

const navbar = () => {
  return (
    <div>
        <div className='logo'>
            Crystaldelta
        </div>
        <nav className='items'>
            <ul className='ul'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/courses'> Courses</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
        </div>
  )
}

export default navbar;