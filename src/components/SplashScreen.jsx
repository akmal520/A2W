import React, { useRef, useState } from 'react';

const SplashScreen = ({ onContinue }) => {
    const [fadeOut, setFadeOut] = useState(false);

    const handleClick = () => {
        setFadeOut(true);

        setTimeout(() => {
            onContinue();
        }, 1000);
    };
    return (
        <div
            className={`fixed inset-0 flex flex-col items-center justify-center bg-black text-[#fffffe] transition-opacity duration-1000 ${
                fadeOut ? 'opacity-0' : 'opacity-100'
            }`}
        >
            <h1 className="text-4xl text-[#7f5af0] font-bold mb-8">
                HOLA AMIGOS, A2WEST IN HERE
            </h1>
            <button
                className="px-4 py-2 border border-white text-white rounded transition-all duration-300 hover:bg-[#7f5af0] hover:text-white hover:border-[#7f5af0]"
                onClick={handleClick}
            >
                HOLA!!!
            </button>
        </div>
    );
};

export default SplashScreen;
