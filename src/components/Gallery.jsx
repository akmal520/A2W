import React, { useEffect } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ImageGallery from './ImageGallery';

const Gallery = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);
    return (
        <section id="gallery">
            <MaxWidthWrapper>
                <div className="py-10 flex justify-center items-center flex-col mt-16">
                    <div
                        className="relative"
                        data-aos="fade-down"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        data-aos-offset="500"
                    >
                        <h1 className="text-[#7f5af0] text-2xl md:text-4xl font-bold">
                            GALLERY
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

                    <ImageGallery />
                    {/* </div> */}
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default Gallery;
