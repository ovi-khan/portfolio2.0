import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const TeamMemberCard = ({ member }) => {
    return (
        <div className='group w-[320px] h-[320px] mx-auto relative overflow-hidden'>
            <img className='w-full h-full object-cover rounded-md group-hover:scale-125  duration-200' src={member.image} alt="" />
            <div className=' group-hover:block duration-1000'>
                <div className='w-2/3 h-2/3  absolute top-[100%] left-1/2 -translate-x-1/2  group-hover:top-1/2  group-hover:-translate-y-1/2 duration-300  bg-gradient-to-r from-emerald-500/60 to-indigo-500/60 rounded-full text-white flex flex-col gap-1 justify-center items-center'>
                    <h3 className='text-xl font-semibold'>{member.name}</h3>
                    <h1 className='text-lg font-semibold'>{member.role}</h1>
                    <div className='bg-white rounded-full py-2 '>
                        <button className='px-4 text-gray-500 hover:text-indigo-500'>
                            <FaFacebookF size={20} />
                        </button>
                        <button className='px-4 border-x-[3px] border-gray-300 text-gray-500 hover:text-indigo-500'>
                            <FaTwitter size={20} />
                        </button>
                        <button className='px-4 text-gray-500 hover:text-indigo-500'>
                            <FaInstagram size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberCard;