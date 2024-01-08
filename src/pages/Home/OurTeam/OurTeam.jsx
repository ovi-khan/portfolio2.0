import React, { useState } from 'react';
import { CiTwitter } from 'react-icons/ci'
import TeamMemberCard from './TeamMemberCard';
import { Fade } from 'react-awesome-reveal';
const OurTeam = () => {
  const [showAllCards, setShowAllCards] = useState(false)
  const maxCardsShow = 4;
  const toggleShowAllCards = () => {
    setShowAllCards(!showAllCards)
  }

  const TeamMembers = [
    {
      name: 'Alextina Deitarson',
      role: 'UI/UX Designer',
      image: 'https://i.ibb.co/KhLZBNy/member1.jpg'
    },
    {
      name: 'Alextina Deitarson',
      role: 'UI/UX Designer',
      image: 'https://i.ibb.co/k3hZG7q/member2.jpg'
    },
    {
      name: 'Alextina Deitarson',
      role: 'UI/UX Designer',
      image: 'https://i.ibb.co/26JbsYp/member3.jpg'
    },
    {
      name: 'Alextina Deitarson',
      role: 'UI/UX Designer',
      image: 'https://i.ibb.co/hVrDQ0y/member4.jpg'
    },
    {
      name: 'Alextina Deitarson',
      role: 'UI/UX Designer',
      image: 'https://i.ibb.co/KhLZBNy/member1.jpg'
    },
    {
      name: 'Alextina Deitarson',
      role: 'UI/UX Designer',
      image: 'https://i.ibb.co/k3hZG7q/member2.jpg'
    },
    {
      name: 'Alextina Deitarson',
      role: 'UI/UX Designer',
      image: 'https://i.ibb.co/26JbsYp/member3.jpg'
    },
    {
      name: 'Alextina Deitarson',
      role: 'UI/UX Designer',
      image: 'https://i.ibb.co/hVrDQ0y/member4.jpg'
    }
  ]

  return (
    <Fade cascade triggerOnce direction="up" damping={1} className="lg:pt-[120px] pt-16  bg-black bg-opacity-10">
      <div className='max-w-[1440px] mx-auto'>

        <div className="text-center space-y-3 lg:px-96 px-10">
          <h3 className='text-start text-transparent text-3xl bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500 inline-block font-secondary'>How We Work</h3>
          <h2 className="text-3xl font-bold text-black">Meet Our Team</h2>
          <p>
            It has Survived Only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release{" "}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 py-16 px-5'>
          {
            TeamMembers.slice(0, showAllCards ? TeamMembers.length : maxCardsShow).map((member, index) =>
              <TeamMemberCard key={index} member={member}></TeamMemberCard>
            )
          }
        </div>

        <div className='flex justify-center '>
          <button className="mb-10 commonbutton rounded-full bg-gradient-to-r from-emerald-400 to-indigo-400  ">
            <span className="block  text-black px-6 py-2  rounded-full bg-white hover:bg-gradient-to-r from-emerald-500 to-indigo-500 hover:text-white">
              {showAllCards ? 'Show Less' : 'See More'}
              </span>
          </button>
        </div>
      </div>
    </Fade>
  );
};

export default OurTeam;