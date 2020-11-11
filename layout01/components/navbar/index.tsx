import React from 'react'
import { Navbar } from './styled'
import { GiAirBalloon } from 'react-icons/gi'
import { FaJira } from 'react-icons/fa'

export const Footer = () => {
    return (
        <Navbar>
            <figure>
                <GiAirBalloon size={42} />
                <figure>
                    Ballon
                </figure>
            </figure>
            <nav>
                <h1>Home</h1>
                <h1>Blog</h1>
                <h1>Services</h1>
                <h1>About</h1>
            </nav>
            <article>
                <FaJira size={42}/>
            </article>
        </Navbar>
    )
}
