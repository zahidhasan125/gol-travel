import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Islands = () => {
    return (
        <div className='px-4 md:px-8 my-16'>
            <div className='text-center w-4/5 mx-auto'>
                <h3 className='text-4xl font-bold mb-6'>Island Stays</h3>
                <p className='font-extralight'>One can choose from a variety of beautiful coral islands which offers different staying experiences from thatched huts to luxurious modern properties. Every island offers a wider range of water sports and beach activities for you to enjoy.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure>
                        <img className='w-full h-[240px]' src="https://gol-media.s3.ap-south-1.amazonaws.com/island/thumbnail/IMG1611901015292.jpg" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Kavaratti</h2>
                        <p className='font-extralight text-xs'>Kavaratti is the capital of the Union Territory of Lakshadweep having ...</p>
                        <div className='flex items-center justify-between'>
                            <span className='flex items-center gap-2'><AiFillStar className='text-2xl text-[#3282AD]' /> 4.5</span>
                            <div className="card-actions justify-center">
                                <button className="btn btn-xs bg-[#3282AD] rounded border-none">Explore More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure>
                        <img className='w-full h-[240px]' src="https://gol-media.s3.ap-south-1.amazonaws.com/island/thumbnail/IMG1611902334105.jpg" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Kavaratti</h2>
                        <p className='font-extralight text-xs'>Kavaratti is the capital of the Union Territory of Lakshadweep having ...</p>
                        <div className='flex items-center justify-between'>
                            <span className='flex items-center gap-2'><AiFillStar className='text-2xl text-[#3282AD]' /> 4.5</span>
                            <div className="card-actions justify-center">
                                <button className="btn btn-xs bg-[#3282AD] rounded border-none">Explore More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure>
                        <img className='w-full h-[240px]' src="https://gol-media.s3.ap-south-1.amazonaws.com/island/thumbnail/IMG1659521703931.jpeg" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Kavaratti</h2>
                        <p className='font-extralight text-xs'>Kavaratti is the capital of the Union Territory of Lakshadweep having ...</p>
                        <div className='flex items-center justify-between'>
                            <span className='flex items-center gap-2'><AiFillStar className='text-2xl text-[#3282AD]' /> 4.5</span>
                            <div className="card-actions justify-center">
                                <button className="btn btn-xs bg-[#3282AD] rounded border-none">Explore More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure>
                        <img className='w-full h-[240px]' src="https://gol-media.s3.ap-south-1.amazonaws.com/island/thumbnail/IMG1659515475541.jpg" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Kavaratti</h2>
                        <p className='font-extralight text-xs'>Kavaratti is the capital of the Union Territory of Lakshadweep having ...</p>
                        <div className='flex items-center justify-between'>
                            <span className='flex items-center gap-2'><AiFillStar className='text-2xl text-[#3282AD]' /> 4.5</span>
                            <div className="card-actions justify-center">
                                <button className="btn btn-xs bg-[#3282AD] rounded border-none">Explore More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure>
                        <img className='w-full h-[240px]' src="https://gol-media.s3.ap-south-1.amazonaws.com/island/thumbnail/IMG1658226444099.jpeg" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Kavaratti</h2>
                        <p className='font-extralight text-xs'>Kavaratti is the capital of the Union Territory of Lakshadweep having ...</p>
                        <div className='flex items-center justify-between'>
                            <span className='flex items-center gap-2'><AiFillStar className='text-2xl text-[#3282AD]' /> 4.5</span>
                            <div className="card-actions justify-center">
                                <button className="btn btn-xs bg-[#3282AD] rounded border-none">Explore More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure>
                        <img className='w-full h-[240px]' src="https://gol-media.s3.ap-south-1.amazonaws.com/island/thumbnail/IMG1659521811745.jpeg" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Kavaratti</h2>
                        <p className='font-extralight text-xs'>Kavaratti is the capital of the Union Territory of Lakshadweep having ...</p>
                        <div className='flex items-center justify-between'>
                            <span className='flex items-center gap-2'><AiFillStar className='text-2xl text-[#3282AD]' /> 4.5</span>
                            <div className="card-actions justify-center">
                                <button className="btn btn-xs bg-[#3282AD] rounded border-none">Explore More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Islands;