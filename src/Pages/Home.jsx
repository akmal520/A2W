import React, { useEffect, useRef, useState } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import Crew from '@/components/Crew';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen';

import A2WMusic from '../assets/audio/A2W GANG.mp3';

const Home = () => {
    const [showSplash, setShowSplash] = useState(true);
    const audioRef = useRef(null);

    const handleContinue = () => {
        setShowSplash(false);
        if (audioRef.current) {
            // audioRef.current.loop = true;
            audioRef.current.play();
        }
    };

    return (
        <>
            <audio ref={audioRef} src={A2WMusic} preload="auto" loop />
            {showSplash ? (
                <SplashScreen onContinue={handleContinue} />
            ) : (
                <div className="overflow-x-hidden">
                    <NavBar />
                    <Hero />
                    <About />
                    <Crew />
                    <Gallery />
                    <Footer />
                </div>
            )}
        </>
    );
};

export default Home;
