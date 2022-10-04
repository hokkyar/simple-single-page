import React from 'react'
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai"
import { BsBookHalf } from "react-icons/bs"
import { BsFillTelephoneFill } from "react-icons/bs"

export default function Navbar() {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink end to="/" className='icon-container'>
                        <i className='icon'><AiFillHome /></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink end to="/projects" className='icon-container'>
                        <i className='icon'><BsBookHalf /></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink end to="/contact" className='icon-container'>
                        <i className='icon'><BsFillTelephoneFill /></i>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
