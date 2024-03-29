import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
const Rooms = () => {
    return (
        <Hero hero="roomsHero" >
            <Banner title="Luxurious rooms" subtitle="deluxe rooms starting at $299" >
            <Link to="/rooms" className="btn-primary">
                Our Rooms
            </Link> 
            </Banner>
        </Hero>
    )
}

export default Rooms
