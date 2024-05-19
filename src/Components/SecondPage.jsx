import React from 'react'
// import imgHW1 from '../assets/loreimg.png'
import blur from '../assets/loreblogimg.png'
import blur1 from '../assets/loreblogimg1.png'
import blur2 from '../assets/loreblogimg2.png'
import blur3 from '../assets/loreblogimg3.png'
// import imgHW from '../assets/lorepagetext.png'
import imgHW1 from '../Components/GydeImages/loreimg.png'
import imgHW from '../Components/GydeImages/lorepagetext.png'

import { FaSearch } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
const SecondPage = () => {
    return (
        <>
            <div className='bg-[#160D19] pb-16'>
                <div className='w-full h-[100vh] bg-[#160D19] relative flex flex-col items-center justify-center'>
                    <img src={imgHW1} alt="" style={{ objectFit: "cover", width: "100%" }} className='absolute h-[100vh] ' />
                    <div className='z-10 flex flex-col items-center justify-center gap-20 mb-28'>
                        <div className='flex flex-col items-center justify-center gap-3'>

                            <p className='text-white md:text-[4.5rem] text-3xl'>Explore Gyde Lores</p>
                            <img src={imgHW} alt="" className='sm:h-24 h-16' />
                        </div>
                        <div className='flex flex-col items-center justify-center gap-4'>
                            <div className=' py-2 flex px-4  items-center justify-center gap-3 w-[50vw] rounded-xl backGroundImage' >
                                <FaSearch className='text-2xl' />
                                <input type="text" className='border-none focus:outline-none font-semibold text-white w-full py-2 bg-transparent' />
                            </div>
                            <div className='flex items-center justify-center gap-2  text-lg  text-white' >
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





                <div className="container-fluid  my-16"     >
                    <div className="row flex justify-around " >
                        
                        <div className="col-md-6" >
                            <button className='border-2 border-yellow-600 text-xl px-4 mb-5 rounded-md py-1 text-yellow-600'>Featured</button>
                            <img src={blur} alt="" className='ml-8 hover:translate-x-2 hover:transform-gpu hover:scale-105' />
                            <div className='my-3'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-md text-yellow-600'>Lifestyle Travel Arabic Nights</p>
                                    <span className='flex items-center gap-1 text-white'><MdOutlineWatchLater />6 min</span>
                                </div>
                                <p className='text-white text-xl'>The James Webb Telescope: Images of Neptune's Rings</p>
                                <h4 className='text-gray-500 my-2'>Dive into adventures the moment inspiration strikes. Tailored for college trips, school field trips, corporate retreats, and large group adventures, Gyde Go crafts personalized itineraries to meet the unique needs of every traveler.F</h4>
                            </div>
                        </div>
                        <div className="col-md-5 ml-2">
                            <button className='border-2 flex gap-5  texl-xl border-yellow-600 px-5 mb-4 rounded-md py-1 text-yellow-600'>Most Read</button>
                            <div className='flex gap-3 items-center my-3 '>
                                <img src={blur1} alt="" className='w-20 hover:translate-2 hover:transform-gpu hover:scale-105' />
                                <div className='flex flex-col gap-2'>
                                    <p className='text-white text-xl'>The James Webb Telescope: Images of Neptune's Rings</p>
                                    <div className='flex gap-2'>
                                        <p className='text-lg text-yellow-600'>Lifestyle Travel Arabic Nights</p>

                                        <span className='flex items-center gap-1 text-white'><MdOutlineWatchLater />6 min</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center my-3 '>
                                <img src={blur1} alt="" className='w-20 hover:translate-2 hover:transform-gpu hover:scale-105' />
                                <div className='flex flex-col gap-2'>
                                    <p className='text-white text-xl'>The James Webb Telescope: Images of Neptune's Rings</p>
                                    <div className='flex gap-2'>
                                        <p className='text-lg text-yellow-600'>Lifestyle Travel Arabic Nights</p>

                                        <span className='flex items-center gap-1 text-white'><MdOutlineWatchLater />6 min</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center my-3 '>
                                <img src={blur1} alt="" className='w-20 hover:translate-2 hover:transform-gpu hover:scale-105' />
                                <div className='flex flex-col gap-2'>
                                    <p className='text-white text-xl'>The James Webb Telescope: Images of Neptune's Rings</p>
                                    <div className='flex gap-2'>
                                        <p className='text-lg text-yellow-600'>Lifestyle Travel Arabic Nights</p>

                                        <span className='flex items-center gap-1 text-white'><MdOutlineWatchLater />6 min</span>
                                    </div>
                                </div>
                            </div>
                            
                            
                            {/* <div className='flex gap-3 items-center my-3 '>
                                <img src={blur1} alt="" className='w-20 hover:translate-2 hover:transform-gpu hover:scale-105' />
                                <div className='flex flex-col gap-2'>
                                    <p className='text-white text-xl'>The James Webb Telescope: Images of Neptune's Rings</p>
                                    <div className='flex gap-2'>
                                        <p className='text-lg text-yellow-600'>Lifestyle Travel Arabic Nights</p>

                                        <span className='flex items-center gap-1 text-white'><MdOutlineWatchLater />6 min</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center my-3 '>
                                <img src={blur1} alt="" className='w-20 hover:translate-2 hover:transform-gpu hover:scale-105' />
                                <div className='flex flex-col gap-2'>
                                    <p className='text-white text-xl'>The James Webb Telescope: Images of Neptune's Rings</p>
                                    <div className='flex gap-2'>
                                        <p className='text-lg text-yellow-600'>Lifestyle Travel Arabic Nights</p>

                                        <span className='flex items-center gap-1 text-white'><MdOutlineWatchLater />6 min</span>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                    </div>
                    {/* <div className='row flex justify-around mt-20 '>
                        <div className="col-md-5 ml-2">
                            <img src={blur2} alt="" className='hover:translate-x-2 hover:transform-gpu hover:scale-105' />
                            <div className='my-3'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-md text-yellow-600'>Lifestyle Travel Arabic Nights</p>
                                    <span className='flex items-center gap-1 text-white'><MdOutlineWatchLater />6 min</span>
                                </div>
                                <p className='text-white text-xl'>The James Webb Telescope: Images of Neptune's Rings</p>
                                <h4 className='text-gray-500 my-2'>Dive into adventures the moment inspiration strikes. Tailored for college trips, school field trips, corporate retreats, and large group adventures, Gyde Go crafts personalized itineraries to meet the unique needs of every traveler.F</h4>
                            </div>
                        </div>

                        <div className="col-md-5 ml-2">
                            <img src={blur2} alt="" className='hover:translate-x-2 hover:transform-gpu hover:scale-105' />
                            <div className='my-3'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-md text-yellow-600'>Lifestyle Travel Arabic Nights</p>
                                    <span className='flex items-center gap-1 text-white'><MdOutlineWatchLater />6 min</span>
                                </div>
                                <p className='text-white text-xl'>The James Webb Telescope: Images of Neptune's Rings</p>
                                <h4 className='text-gray-500 my-2'>Dive into adventures the moment inspiration strikes. Tailored for college trips, school field trips, corporate retreats, and large group adventures, Gyde Go crafts personalized itineraries to meet the unique needs of every traveler.F</h4>
                            </div>
                        </div>
                    </div>
                    <div className="rowc flex justify-evenly mt-20">
                        <div className="col-md-3">
                            <img src={blur3} alt="" className='hover:translate-x-2 hover:transform-gpu hover:scale-105' />
                            <div className='my-3'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-md text-yellow-600'>Lifestyle Travel Arabic Nights</p>
                                    <span className='flex items-center gap-1 text-white'><MdOutlineWatchLater />6 min</span>
                                </div>
                                <p className='text-white text-xl'>The James Webb Telescope: Images of Neptune's Rings</p>
                                <h4 className='text-gray-500 my-2'>Dive into adventures the moment inspiration strikes. Tailored for college trips, school field trips, corporate retreats, and large group adventures, Gyde Go crafts personalized itineraries to meet the unique needs of every traveler.F</h4>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <img src={blur3} alt="" className='hover:translate-x-2 hover:transform-gpu hover:scale-105' />
                            <div className='my-3'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-md text-yellow-600'>Lifestyle Travel Arabic Nights</p>
                                    <span className='flex items-center gap-1 text-white'><MdOutlineWatchLater />6 min</span>
                                </div>
                                <p className='text-white text-xl'>The James Webb Telescope: Images of Neptune's Rings</p>
                                <h4 className='text-gray-500 my-2'>Dive into adventures the moment inspiration strikes. Tailored for college trips, school field trips, corporate retreats, and large group adventures, Gyde Go crafts personalized itineraries to meet the unique needs of every traveler.F</h4>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <img src={blur3} alt="" className='hover:translate-x-2 hover:transform-gpu hover:scale-105' />
                            <div className='my-3'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-md text-yellow-600'>Lifestyle Travel Arabic Nights</p>
                                    <span className='flex items-center gap-1 text-white'><MdOutlineWatchLater />6 min</span>
                                </div>
                                <p className='text-white text-xl'>The James Webb Telescope: Images of Neptune's Rings</p>
                                <h4 className='text-gray-500 my-2'>Dive into adventures the moment inspiration strikes. Tailored for college trips, school field trips, corporate retreats, and large group adventures, Gyde Go crafts personalized itineraries to meet the unique needs of every traveler.F</h4>
                            </div>
                        </div>

                    </div> */}
                </div>
            </div>
        </>
    )
}

export default SecondPage