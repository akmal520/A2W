import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-[#242629]">
            <MaxWidthWrapper>
                <div className="py-5 flex justify-center items-center flex-col mt-10">
                    <h1 className="text-[#7f5af0] text-3xl md:text-xl font-bold">
                        &copy; {year} A2W | All Rights Reserved
                    </h1>
                </div>
            </MaxWidthWrapper>
        </footer>
    );
};

export default Footer;
