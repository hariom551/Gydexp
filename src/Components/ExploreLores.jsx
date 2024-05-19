import React from 'react';
import Neptune from '../Components/GydeImages/Neptune.png';
import mostRead from '../Components/GydeImages/mostRead.png';
import imgHW1 from '../Components/GydeImages/loreimg.png'
import imgHW from '../Components/GydeImages/lorepagetext.png'
import { MdOutlineWatchLater } from "react-icons/md";
import blur from '../assets/loreblogimg.png'
import blur1 from '../assets/loreblogimg1.png'
import blur2 from '../assets/loreblogimg2.png'
import blur3 from '../assets/loreblogimg3.png'


import { FaSearch } from "react-icons/fa";


const articles = [
  "The James Webb telescope: Images of Neptune's Rings",
  "The James Webb telescope: Images of Neptune's Rings",
  "The James Webb telescope: Images of Neptune's Rings",
  "The James Webb telescope: Images of Neptune's Rings",
  "The James Webb telescope: Images of Neptune's Rings",
  "The James Webb telescope: Images of Neptune's Rings",
];

const ExploreLores = () => {
  return (
    <>
      <div className='w-full h-[100vh] bg-[#160D19] relative flex flex-col items-center justify-center'>
        <img src={imgHW1} alt="hariom" style={{ objectFit: "cover", width: "100%" }} className='absolute h-[100vh] ' />
        <div className='z-10 flex flex-col items-center justify-center gap-20 mb-20 mt-20'>

          <div className='flex flex-col items-center justify-center gap-3'>
            <h1 className="text-white text-4xl md:text-6xl font-playfair mb-4 mt-36">
              Explore Gyde Lores
            </h1>
            <img src={imgHW} alt="" className='sm:h-24 ' />
          </div>

          <div className="mb-36">
            <div className="relative w-full max-w-xl  ">
              <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
              <input
                type="text"
                placeholder=""
                className="w-full p-4 pl-10 rounded-lg text-white bg-gray-700 bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ backdropFilter: 'blur(10px)' }}
              />
            </div>

            <div className='flex items-center justify-center gap-2  text-lg  text-white mt-4' >
              <p>All categories</p>
              <p>Animations</p>
              <p>Design</p>
              <p>Illustraction</p>
              <p>Business</p>
              <p className="">Technology</p>
            </div>
          </div>

        </div>

      </div>


      <div className="flex gap-20 p-10 mt-18 pt-10 bg-gray-900 text-white font-sans">
        <div className="flex-[2] relative">
          <button className='border-2 border-yellow-400 text-xl px-4 mb-5 rounded-[8px] py-1 text-yellow-400'>Featured</button>
          <img src={Neptune} alt="" className='w-full h-auto hover:translate-x-2 hover:transform-gpu hover:scale-105' />
          <div className="p-4">
            <p className="flex justify-between items-center mt-6">
              <span className="text-yellow-400">
                Lifestyle <span className="mx-2">&bull;</span>
                Travel <span className="mx-2">&bull;</span>
                Arabic Nights
              </span>
              <span className="flex items-center gap-1">
                <MdOutlineWatchLater />6 min
              </span>
            </p>
            <h2 className="mt-4 text-xl">The James Webb telescope: Images of Neptune's Rings</h2>
            <p className="mt-2">
              Dive into adventures the moment inspiration strikes. Tailored for college trips,
              school field trips, corporate retreats, and large group adventures, Gyde Go crafts
              personalized itineraries to meet the unique needs of every traveler.
            </p>
          </div>
        </div>






        <div className="most-read flex-[1] relative ">
        <button className='border-2 border-yellow-400 text-xl px-4 mb-5 rounded-[8px] py-1 text-yellow-400'>Most Read</button>
          {/* <span className="border border-yellow-400 text-yellow-400 py-1 px-6 mb-18 rounded-[8px]">Most Read</span> */}
          {/* <h3>Most Read</h3> */}
          <ul>
            {articles.map((article, index) => (
              <li key={index}>
                {/* <img src={mostRead} alt="" className='w-full h-auto hover:translate-x-2 hover:transform-gpu hover:scale-105' /> */}
                <img src={mostRead} alt="" className='w-20 hover:translate-2 hover:transform-gpu hover:scale-105' />
                {/* <img src={mostRead} alt="Thumbnail" className="thumbnail " /> */}
                
                <div className="article-info">
                  <p className="ml-3">{article}</p>

                  <p className="ml-3 flex justify-between items-center ">
                    <span className="text-yellow-400">
                      Lifestyle <span className="mx-2">&bull;</span>
                      Travel <span className="mx-2">&bull;</span>
                      Arabic Nights
                    </span>
                    <span className="flex items-center gap-1">
                      <MdOutlineWatchLater />6 min
                    </span>
                  </p>

                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>

  );
};

export default ExploreLores;
