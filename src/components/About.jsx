import React, { useEffect } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import Logo_A2W from '../assets/img/Logo_A2W.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);
    return (
        <section id="about">
            <MaxWidthWrapper>
                <div className="py-10 flex justify-center items-center flex-col">
                    <div
                        className="relative"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="250"
                    >
                        <h1 className="text-[#7f5af0] text-2xl md:text-4xl font-bold">
                            ABOUT
                        </h1>
                        <span
                            className="absolute -bottom-0.5 right-0.5 w-1/2 h-0.5 bg-[#7f5af0] duration-300"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-delay="800"
                        ></span>
                        <span
                            className="absolute -bottom-0.5 left-0.5 w-1/2 h-0.5 bg-[#7f5af0] duration-300"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="800"
                        ></span>
                    </div>

                    <div
                        className="flex justify-center items-center gap-16 mt-5"
                        data-aos="zoom-out"
                        data-aos-duration="1000"
                        data-aos-delay="500"
                    >
                        <p className="text-[#7f5af0] text-lg font-semibold leading-8 border-red-50 select-none">
                            Kelompok All About West Side biasa di sebut A2West
                            ini sering kali berkumpul bahkan berusaha bertahan
                            hidup di area kota khususnya bagian barat dengan
                            raut muka layaknya seperti orang Mexico dengan
                            atribut penampilan yang acak acakan seperti anak
                            jalanan, dan anak A2West sendiri berlatar belakang
                            dari keluarga yang kurang mampu dan tidak bahagia,
                            maka dari itu mereka membentuk sebuah kelompok
                            bernama A2West untuk menuntut kebahagian yang mereka
                            tidak pernah terima selama hidupnya.
                        </p>

                        <img
                            src={Logo_A2W}
                            alt="Logo"
                            className="select-none hover:scale-110 hover:-rotate-3 duration-300"
                        />
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default About;
