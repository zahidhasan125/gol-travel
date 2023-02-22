import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
const Packages = () => {
    return (
        <div className='px-4 md:px-8 my-16'>
            <div className='text-center'>
                <h3 className='text-4xl font-bold mb-6'>Best Packages For You</h3>
                <p className='font-extralight'>This is a unique experience on ship, sea and land, exploring different coral islands of Lakshadweep.</p>
            </div>
            <div className="w-full flex border border-[#3282AD] justify-between my-8">
                <button className="btn btn-outline border-x-1 border-[#3282AD] hover:bg-[#3282AD] flex-1 rounded-none">Maldives</button>
                <button className="btn btn-outline border-x-1 border-[#3282AD] hover:bg-[#3282AD] flex-1 rounded-none">Samudram</button>
                <button className="btn btn-outline border-x-1 border-[#3282AD] hover:bg-[#3282AD] flex-1 rounded-none hidden md:inline-block">Cordelia</button>
                <button className="btn btn-outline border-x-1 border-[#3282AD] hover:bg-[#3282AD] flex-1 rounded-none hidden lg:inline-block">Agatti</button>
                <button className="btn btn-outline border-x-1 border-[#3282AD] hover:bg-[#3282AD] flex-1 rounded-none">More</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure>
                        <img className='w-full h-[240px]' src="https://gol-media.s3.ap-south-1.amazonaws.com/package/thumbnail/IMG1670495827279.jpg" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className='flex items-center justify-between'>
                            <h2 className="card-title"><FiMapPin />Indonesia</h2>
                            <span className='flex items-center gap-2'><AiFillStar className='text-2xl text-[#3282AD]' /> 4.5</span>
                        </div>
                        <p className='font-extralight text-xs'>Explore the Beauty of the island for 3 days and 2 nights with our travel agency...</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-xs bg-[#3282AD] rounded border-none">Book Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className='w-full h-[240px]' src="https://gol-media.s3.ap-south-1.amazonaws.com/package/thumbnail/IMG1672723575709.jpeg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex items-center justify-between'>
                            <h2 className="card-title"><FiMapPin />Indonesia</h2>
                            <span className='flex items-center gap-2'><AiFillStar className='text-2xl text-[#3282AD]' /> 4.5</span>
                        </div>
                        <p className='font-extralight text-xs'>Explore the Beauty of the island for 3 days and 2 nights with our travel agency...</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-xs bg-[#3282AD] rounded border-none">Book Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className='w-full h-[240px]' src="https://gol-media.s3.ap-south-1.amazonaws.com/package/thumbnail/IMG1637320544874.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex items-center justify-between'>
                            <h2 className="card-title"><FiMapPin />Indonesia</h2>
                            <span className='flex items-center gap-2'><AiFillStar className='text-2xl text-[#3282AD]' /> 4.5</span>
                        </div>
                        <p className='font-extralight text-xs'>Explore the Beauty of the island for 3 days and 2 nights with our travel agency...</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-xs bg-[#3282AD] rounded border-none">Book Now</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='mt-16 flex justify-center items-center'>

            <button className='hover:bg-[#3282AD] text-[#3282AD] btn btn-outline border-[#3282AD]'>Discover More</button>
            </div>
        </div>
    );
};

export default Packages;