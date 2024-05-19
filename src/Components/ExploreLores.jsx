import React from 'react';
import Neptune from '../Components/GydeImages/Neptune.png';
import mostRead from '../Components/GydeImages/mostRead.png';

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

    <div className="flex gap-20 p-10 mt-18 pt-10 bg-black text-white font-sans">

      <div className="flex-[2] relative mt-16">
        <span className="border border-yellow-400 text-yellow-400 py-1 px-6 rounded-[8px]">Featured</span>

        <img src={Neptune} alt="Featured" className="w-full h-auto rounded-[10px] mt-4" />
        
        <p className="text-yellow-400">
          Lifestyle <span className="mx-2">&bull;</span>
          Travel <span className="mx-2">&bull;</span>
          Arabic Nights <span className="mx-2">&bull;</span>
          6 Min
        </p>
        
        <h2>The James Webb telescope: Images of Neptune's Rings</h2>

        <p>
          Dive into adventures the moment inspiration strikes. Tailored for college trips,
          school field trips, corporate retreats, and large group adventures, Gyde Go crafts
          personalized itineraries to meet the unique needs of every traveler.
        </p>

        


      </div>


      <div className="most-read flex-[1] relative mt-16">
      <span className="border border-yellow-400 text-yellow-400 py-1 px-6 mb-18 rounded-[8px]">Most Read</span>
        {/* <h3>Most Read</h3> */}
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <img src={mostRead} alt="Thumbnail" className="thumbnail " />
              <div className="article-info">
                <p>{article}</p>
                <p className="text-yellow-400">
                  Lifestyle <span className="mx-2">&bull;</span>
                  Travel <span className="mx-2">&bull;</span>
                  Arabic Nights <span className="mx-2">&bull;</span>
                  6 Min
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExploreLores;
