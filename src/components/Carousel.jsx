import React, { useEffect, useState } from 'react';
import A2W_1 from '../assets/img/a2w_1.png';
import A2W_2 from '../assets/img/a2w_2.png';
import A2W_3 from '../assets/img/a2w_3.png';

const images = [A2W_1, A2W_2, A2W_3];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                // setCurrentIndex((currentIndex + 1) % images.length);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true);
            }, 300);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                        fade && index === currentIndex
                            ? 'opacity-100'
                            : 'opacity-0'
                    }`}
                >
                    <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-black opacity-45"></div>
                </div>
            ))}
            <div className="absolute inset-0 flex justify-center items-center z-10 drop-shadow-2xl">
                <h1 className="text-[#fffffe] text-4xl md:text-6xl font-bold select-none">
                    ALL ABOUT WEST SIDE
                </h1>
            </div>
        </div>
    );
};

export default Carousel;
