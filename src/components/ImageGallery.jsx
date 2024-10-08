import React, { useEffect, useState } from 'react';
import Bento from '../assets/img/crew/bento.png';
import A2W_1 from '../assets/img/a2w_1.png';
import A2W_2 from '../assets/img/a2w_2.png';
import A2W_3 from '../assets/img/a2w_3.png';

import Aos from 'aos';
import 'aos/dist/aos.css';

const imgUrls = [
    Bento,
    A2W_1,
    A2W_2,
    A2W_3,
    Bento,
    A2W_1,
    A2W_2,
    A2W_3,
    Bento,
    A2W_1,
];

const ImageGallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    const openModal = (index) => {
        setSelectedIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedIndex(null);
        setIsModalOpen(false);
    };

    const showPreviousImage = (e) => {
        e.stopPropagation();
        // setSelectedIndex((selectedIndex - 1 + imgUrls.length) % imgUrls.length);
        setSelectedIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : imgUrls.length - 1
        );
    };

    const showNextImage = (e) => {
        e.stopPropagation();
        // setSelectedIndex((selectedIndex + 1) % imgUrls.length);
        setSelectedIndex((prevIndex) =>
            prevIndex < imgUrls.length - 1 ? prevIndex + 1 : 0
        );
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);

    return (
        <div>
            <div className="flex flex-wrap justify-center items-center mt-10 gap-8">
                {imgUrls.map((url, index) => (
                    <div
                        key={index}
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-delay={index * 100}
                        data-aos-offset="250"
                    >
                        <img
                            src={url}
                            alt={`Thumbnail ${index + 1} `}
                            className="w-44 h-44 object-cover object-top cursor-pointer hover:scale-105 transition-all duration-500 rounded-lg grayscale hover:grayscale-0"
                            onClick={() => openModal(index)}
                        />
                    </div>
                ))}
            </div>

            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-999999 bg-black bg-opacity-75"
                    onClick={closeModal}
                >
                    <div className="relative">
                        <span className="absolute top-2 right-2 text-white text-3xl font-bold cursor-pointer">
                            &times;
                        </span>

                        <button
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-2xl font-bold p-2 bg-black bg-opacity-50 hover:bg-opacity-75"
                            onClick={showPreviousImage}
                        >
                            &#8249;
                        </button>

                        <img
                            src={imgUrls[selectedIndex]}
                            alt="Full Image"
                            className="w-[80vw] h-[80vh] object-contain"
                        />

                        <button
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-2xl font-bold p-2 bg-black bg-opacity-50 hover:bg-opacity-75"
                            onClick={showNextImage}
                        >
                            &#8250;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
