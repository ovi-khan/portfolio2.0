import React from 'react';
import About from '../Home/About/About';
import Testimonials from '../Home/Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import { Fade } from 'react-awesome-reveal';

const AboutUs = () => {
    return (
        <Fade cascade triggerOnce direction="up" damping={0.2} className='pt-20'>
            <div className='bg-gray-800'>
                <div className='h-[200px] md:h-[300px] max-w-[1440px] mx-auto text-white flex justify-center flex-col'>
                    <h1 className='text-3xl md:text-5xl font-bold mb-2'>About us</h1>
                    <p className='text-lg'>Home &gt; About</p>
                </div>
            </div>
            <About />
            <Testimonials />
            <Contact />
        </Fade>
    );
};

export default AboutUs;