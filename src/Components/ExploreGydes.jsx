import React from 'react';
import { FaSearch } from 'react-icons/fa';
import bgImage from '../Components/GydeImages/BGImage.png';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import UMLI from '../Components/GydeImages/UMLI.png';
import TTYC from '../Components/GydeImages/TTYC.png';
import CAC from '../Components/GydeImages/CAC.png';
import HFFS from '../Components/GydeImages/HFFS.png';
import Hariom from '../Components/GydeImages/Hariom.jpg';



const ExploreGydes = () => {
  return (
    <>
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-white text-4xl md:text-6xl font-playfair mb-4 mt-12">
        Reimagining Experiences
      </h1>
      <p className="text-white text-4xl md:text- font-dancing italic mb-8">
        for those who wander
      </p>

     
      <div className="relative w-full max-w-lg mt-2">
        <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
        <input
          type="text"
          placeholder="Search for Places, Pincodes, Travel Destinations"
          className="w-full p-4 pl-10 rounded-lg text-white bg-gray-700 bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{ backdropFilter: 'blur(10px)' }}
        />
      </div>

      <div className="flex justify-center items-center mt-12">
        <div className="flex space-x-2">
          <AvatarGroup
            max={6}
            renderSurplus={(surplus) => <span>+{}</span>}
            total={570}
          >
            <Avatar alt="Hariom" src={Hariom} />
            <Avatar alt="Shubham" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Yashendra" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor" src="/static/images/avatar/5.jpg" />
            <Avatar alt="Grevor" src="/static/images/avatar/6.jpg" />
            <Avatar alt="Trevor" src="/static/images/avatar/7.jpg" />
          </AvatarGroup>
        </div>
        <p className='text-white mx-2'>Look what experience 570 people around you recommend</p>
        <button className="bg-yellow-400 hover:bg-yellow-300 text-black py-2 px-4 rounded-xl">
          Gyde Now
        </button>
      </div>
    </div>
  
    <div className="pillars-container flex flex-col items-center justify-center bg-gray-900 bg-cover bg-center">
      <h2 className="pillars-heading text-white mt-4">The four pillars that define the Gyde experience</h2>
     
      <div className="pillars">
        <div className="pillar">
          <img src={UMLI} alt="UMLI" className="Pimage" />
          <h3 >Unmatched Local Insights</h3>
          <p>Dive into the unseen, guided by those who know it best.</p>
        </div>
        <div className="pillar">
          <img src={TTYC} alt="TTYC" className="Pimage" />
          <h3>Tailored to Your Curiosity</h3>
          <p>Making every journey as unique as you are.</p>
        </div>
        <div className="pillar">
          <img src={CAC} alt="CAC" className="Pimage" />
          <h3>Connect Across Cultures</h3>
          <p>Beyond places, it’s the people you meet & the culture you celebrate.</p>
        </div>
        <div className="pillar">
          <img src={HFFS} alt="HFFS" className="Pimage" />
          <h3>Hassle-Free, Full Support</h3>
          <p>Smooth sailing from search to memories.</p>
        </div>
      </div>
    </div>
  

    </>
);
};

export default ExploreGydes;
