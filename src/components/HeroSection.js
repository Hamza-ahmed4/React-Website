import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSetion.css'

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <video src={process.env.PUBLIC_URL + '/videos/video-2.mp4'}  autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for ?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>

                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Watch Trailer <i className='far fa-play-cirlce' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
