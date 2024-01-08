import React from 'react';
import FAQ from '../Home/FAQ/FAQ';
import Testimonials from '../Home/Testimonials/Testimonials';
import Contact from '../Contact/Contact';

const PortfoliPage = () => {
    return (
        <div className='pt-20'>
            <div className='bg-gray-800'>
                <div className='h-[200px] md:h-[300px] max-w-[1440px] mx-auto text-white flex justify-center flex-col'>
                    <h1 className='text-3xl md:text-5xl font-bold mb-2'>FAQ</h1>
                    <p className='text-lg'>Home &gt; FAQ</p>
                </div>
            </div>
            <FAQ />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default PortfoliPage;