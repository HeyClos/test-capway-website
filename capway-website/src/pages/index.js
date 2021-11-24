import React, { useState } from 'react';
import Benefits from '../components/Benefits';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import DownloadBar from '../components/DownloadBar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navbar toggle={toggle} />
            <HeroSection />
            <Benefits />
            <DownloadBar />
        </>
    )
}

export default Home
