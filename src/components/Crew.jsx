import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Bento from '../assets/img/crew/bento.png';

const imgUrls = [
    Bento,
    Bento,
    Bento,
    Bento,
    Bento,
    Bento,
    Bento,
    Bento,
    Bento,
    Bento,
];

const Crew = () => {
    const [visibleCount, setVisibleCount] = useState(5);

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 5);
    };

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);
    return (
        <section id="crew">
            <MaxWidthWrapper>
                <div className="py-10 flex justify-center items-center flex-col mt-10">
                    <div
                        className="relative"
                        data-aos="fade-down"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        data-aos-offset="500"
                    >
                        <h1 className="text-[#7f5af0] text-2xl md:text-4xl font-bold">
                            CREW
                        </h1>
                        <span
                            className="absolute -bottom-0.5 right-0.5 w-1/2 h-0.5 bg-[#7f5af0] duration-300"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-delay="800"
                            data-aos-offset="500"
                        ></span>
                        <span
                            className="absolute -bottom-0.5 left-0.5 w-1/2 h-0.5 bg-[#7f5af0] duration-300"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="800"
                            data-aos-offset="500"
                        ></span>
                    </div>

                    <div className="flex flex-wrap mt-5">
                        {imgUrls.slice(0, visibleCount).map((_, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center justify-center w-1/2 md:w-1/3 xl:w-1/5 p-4 transition-all duration-500 hover:scale-105 hover:rotate-6"
                            >
                                <div
                                    className="relative mb-4"
                                    data-aos="zoom-out"
                                    data-aos-duration="1000"
                                    data-aos-delay={i * 150}
                                    data-aos-offset="150"
                                >
                                    <img
                                        src={Bento}
                                        alt=""
                                        className="w-full h-auto aspect-[2/3] object-cover rounded-md"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-500">
                                        <div className="flex flex-col items-center justify-center h-full select-none hover:-rotate-6 transition-all duration-500">
                                            <h2 className="text-lg font-bold text-[#fffffe]">
                                                Bento
                                            </h2>
                                            <p className="text-sm text-[#fffffe]">
                                                Web Developer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {visibleCount < imgUrls.length && (
                        <button
                            onClick={handleShowMore}
                            className="text-[#7f5af0] font-bold text-lg border-2 py-2 px-4 rounded-full border-[#7f5af0] hover:text-white hover:border-[#7f5af0] hover:bg-[#7f5af0] transition-all duration-300"
                        >
                            Show More
                        </button>
                    )}
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default Crew;
