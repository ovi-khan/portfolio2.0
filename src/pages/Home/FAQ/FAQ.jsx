import React from 'react';

const FAQ = () => {

    const allFAQ = [
        {
            question: 'What is digital platform',
            ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus, eveniet blanditiis dolore ad quis architecto esse! Quam, perspiciatis nihil'
        },
        {
            question: 'How can a digital platform helps your business grow?',
            ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus, eveniet blanditiis dolore ad quis architecto esse! Quam, perspiciatis nihil'
        },
        {
            question: 'How do i book my slot to meet with your technical team?',
            ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus, eveniet blanditiis dolore ad quis architecto esse! Quam, perspiciatis nihil'
        },
        {
            question: 'How many projects have your completed so far?',
            ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus, eveniet blanditiis dolore ad quis architecto esse! Quam, perspiciatis nihil',
        },
    ]

    return (
        <div className='lg:pt-[120px] p-4 min-h-screen pt-16  bg-gray-100'>
            <div className='max-w-[1440px] mx-auto w-full '>
                <div className='max-w-xl'>
                    <span className='font-secondary text-5xl bg-gradient-to-r from-emerald-500 to-indigo-500 bg-clip-text text-transparent '>F.A.Q</span>
                    <h1 className='text-3xl md:text-5xl leading-10 font-bold my-3'>
                        Our Expert Answers
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus, eveniet blanditiis dolore ad quis architecto esse! Quam, perspiciatis nihil!</p>
                </div>

                <div className='flex flex-col md:flex-row md:items-center gap-8 py-14'>
                    <div className=' relative h-[600px] flex-1'>
                        <div className='rounded-full bg-gradient-to-r from-emerald-400 to-indigo-400  image1 '>
                            <div className='rounded-full bg-white p-2'>
                                <img src="https://i.ibb.co/889Ghgp/sebastian-herrmann-6j-Aq8-Mkb-ULo-unsplash.jpg" alt="sebastian-herrmann-6j-Aq8-Mkb-ULo-unsplash" className='rounded-full w-24 h-24 md:w-32 md:h-32  '></img>
                            </div>
                        </div>
                        <div className='rounded-full bg-gradient-to-r from-emerald-400 to-indigo-400  image2 '>
                            <div className='rounded-full bg-white p-4'>
                                <img src="https://i.ibb.co/Xj2p3QR/shutterstock-370390046-632x420.jpg" alt="shutterstock-370390046-632x420" className='rounded-full w-48 h-48 md:w-64 md:h-64 '></img>
                            </div>
                        </div>

                        <div className='rounded-full bg-gradient-to-r from-emerald-400 to-indigo-400  image3 '>
                            <div className='rounded-full bg-white p-2'>
                                <img src="https://i.ibb.co/7gX2bn2/working-with-data.jpg" className='rounded-full w-40 h-40 '></img>
                            </div>
                        </div>

                        <div className='rounded-full bg-gradient-to-r from-emerald-400 to-indigo-400 absolute top-[25%] right-5 '>
                            <div className='rounded-full bg-white p-2'>
                                <img src="https://i.ibb.co/cxm74zc/young-employees-sitting-office-table-using-laptop.jpg" className='rounded-full w-24 h-24 '></img>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='rounded-lg bg-gradient-to-l from-indigo-500 to-emerald-500 p-[1px]'>
                            <div className="join join-vertical rounded-lg w-full p-4 lg:p-6 divide-y-2 bg-white">


                                {
                                    allFAQ.map((faq, index) => <div key={index} className="collapse collapse-arrow join-item border-base-300">
                                        <input type="radio" name="my-accordion-4" checked="checked" />
                                        <div className="collapse-title">
                                            <span className='text-2xl font-bold bg-gradient-to-r from-emerald-500 to-indigo-500 bg-clip-text text-transparent'>
                                                {faq.question}
                                            </span>
                                        </div>
                                        <div className="collapse-content">
                                            <p className='text-lg text-gray-500'>{faq.ans}</p>
                                        </div>
                                    </div>)
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FAQ;