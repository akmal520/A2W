import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { Link } from 'react-router-dom';
import { Link as Lsc } from 'react-scroll';

const NavBar = () => {
    const navigation = ['About', 'Crew', 'Gallery'];

    const [bgNav, setBgNav] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBgNav(true) : setBgNav(false);
        });
    }, []);

    return (
        <nav
            className={`fixed z-[100] h-16 inset-x-0 top-0 w-full transition-all duration-300 ${
                bgNav ? 'bg-[#16161a] backdrop-blur-lg ' : ''
            }`}
        >
            <MaxWidthWrapper>
                <div className="flex h-16 items-center justify-between  ">
                    <Link
                        to="/"
                        className={`flex z-40 font-semibold duration-300 cursor-pointer text-lg ${
                            bgNav
                                ? 'text-[#7f5af0] hover:text-[#7f5af0]/90'
                                : 'text-[#fffffe] hover:text-[#fffffe]/90'
                        }`}
                    >
                        A2W
                    </Link>

                    <div className="h-full flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Lsc
                                to={`${item.toLowerCase()}`}
                                smooth={true}
                                duration={1000}
                                key={item}
                                offset={-50}
                                className={`font-semibold duration-300 cursor-pointer text-lg ${
                                    bgNav
                                        ? 'text-[#7f5af0] hover:text-[#7f5af0]/90'
                                        : 'text-[#fffffe] hover:text-[#fffffe]/90'
                                }`}
                            >
                                {item.toUpperCase()}
                            </Lsc>
                        ))}

                        <Link
                            to="/login"
                            className={`font-semibold duration-300 cursor-pointer text-lg ${
                                bgNav
                                    ? 'text-[#7f5af0] hover:text-[#7f5af0]/90'
                                    : 'text-[#fffffe] hover:text-[#fffffe]/90'
                            }`}
                        >
                            LOGIN
                        </Link>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
};

export default NavBar;
