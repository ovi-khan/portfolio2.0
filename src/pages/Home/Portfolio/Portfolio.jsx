import React from 'react';

const Portfolio = () => {

    const allPortfolio = [
        {
            image: 'https://i.ibb.co/vZFQzQG/portfoli1.jpg',
            title: 'Paid Media Solution',
            subTitle: 'Marketing/Solution',
            hight: true
        },
        {
            image: 'https://i.ibb.co/6yv6yn4/portfoli2.jpg',
            title: 'It Project Management',
            subTitle: 'Marketing/Solution'
        },
        {
            image: 'https://i.ibb.co/WHGjKVt/portfoil3.jpg',
            title: 'Cyber security management',
            subTitle: 'Marketing/Solution',
            hight: true
        },
        {
            image: 'https://i.ibb.co/SBTP4nw/portfolio4.jpg',
            title: 'Data Backup and Recovery',
            subTitle: 'Marketing/Design Solution'
        },
    ]

    return (
        <div className='lg:pt-[120px] p-4 min-h-screen pt-16  bg-gray-800 bg-opacity-40'>
            <div className='max-w-[1440px] mx-auto w-full'>
                <div className='flex flex-col items-center text-center md:text-left gap-6 md:flex-row  md:justify-between md:items-end'>
                    <div>
                        <h3 className='font-secondary text-5xl text-gray-300 '>Portfolio</h3>
                        <h1 className='text-3xl md:text-5xl leading-10 text-white font-bold mt-3'>
                            Our Latest Work For Our
                            <br />
                            Best Customer
                        </h1>
                    </div>
                    <div className='text-white '>
                        <ul className='flex gap-6 md:8'>
                            <li className='cursor-pointer text-lg font-semibold bg-gradient-to-r from-emerald-500 to-indigo-500 bg-clip-text text-transparent'>All</li>
                            <li className='cursor-pointer text-sl font-semibold'>Web Design</li>
                            <li className='cursor-pointer text-sl font-semibold'>Motion Design</li>
                        </ul>
                    </div>
                </div>

                <div className='mt-10 mb-20  grid grid-cols-1 md:grid-cols-2 md:grid-rows-5 gap-6 text-white h-auto md:max-h-[800px]'>
                    {
                        allPortfolio.map((portfolio, index) =>
                            <div key={index}
                                className={`flex flex-col group p-3 hover:bg-zinc-700 hover:bg-opacity-10  duration-200 rounded-xl  ${portfolio.hight ? 'md:row-span-3' : 'md:row-span-2'} w-full h-full`}>
                                <div className={`h-full overflow-hidden mb-2`}>
                                    <img loading='lazy' className={`w-full h-full rounded-xl transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125`} src={portfolio.image} alt="" />
                                </div>
                                <div className='mt-auto'>
                                    <h2 className=' text-2xl font-bold text-gray-200 '>{portfolio.title}</h2>
                                    <p className='text-sm'>{portfolio.subTitle}</p>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Portfolio;