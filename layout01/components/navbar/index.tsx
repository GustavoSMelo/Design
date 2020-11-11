import React from 'react'
import { Header } from './styled'
import { GiAirBalloon } from 'react-icons/gi'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'

const Navbar = (props) => {
    return (
        <Header textcolor={props.textcolor}>
            <figure>
                <GiAirBalloon size={62} />
            </figure>
            <nav>
                <h1>Home</h1>
                <h1>Blog</h1>
                <h1>Services</h1>
                <h1>About</h1>
            </nav>
            <article>
                <span><FaFacebook size={42} /></span>
                <span><FaTwitter size={42}/></span>
                <span><FaYoutube size={42}/></span>
            </article>
        </Header>
    )
}

export default Navbar
