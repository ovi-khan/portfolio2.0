import React from 'react';
import './About.css';
import CountUp from 'react-countup';
const Aboutinfo = () => {
    return (
        <div className='aboutinfo'>
            <div className='max-w-[1440px] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4 py-16 '>
                    <div className='border-0 md:border-r-2 md:border-gray-500 text-center md:text-start  p-5' >
                        <h1 className='text-4xl md:text-6xl font-extrabold numbers '><CountUp start={0} end={254} duration={2} delay={1}/>+</h1>
                        <p className='text-xl font-bold text-white py-1 '>Projects Complete</p>
                  
                    </div>

                    <div className='border-0 md:border-r-2 md:border-gray-500 text-center  md:text-start p-5' >
                        <h1 className='text-4xl md:text-6xl font-extrabold numbers'><CountUp start={0} end={164} duration={2} delay={1}/>+</h1>
                        <p className='text-xl font-bold text-white py-1'>Quality Team Member</p>
                    </div>

                    <div className='border:0 md:border-r-2 md:border-gray-500 text-center md:text-start  p-5 ' >
                        <h1 className='text-4xl md:text-6xl font-extrabold numbers'><CountUp start={0} end={433} duration={2} delay={1}/>+</h1>
                        <p className='text-xl font-bold text-white py-1'>Award Winning</p>                  
                    </div>

                    <div className=' text-center md:text-start  p-5' >
                        <h1 className='text-4xl md:text-6xl font-extrabold numbers  '><CountUp start={0} end={30} duration={2} delay={1}/>+</h1>
                        <p className='text-xl font-bold text-white py-1'>Years Of Experience</p>                 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutinfo;