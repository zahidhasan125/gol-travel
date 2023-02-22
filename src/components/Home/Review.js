import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import Carousel from "react-multi-carousel";

const Review = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='my-16 px-8'>
            <div className='mb-8'>
                <h3 className='text-3xl font-bold text-center'>What Our Clients Says About Us</h3>
            </div>
            <Carousel responsive={responsive} className='py-8'>
                <div className="card max-w-[400px] bg-base-100 shadow-xl">
                    <div className="avatar w-24 mx-auto">
                        <div className="w-24 rounded-full">
                            <img src="https://www.golakshadweep.com/assets/new-theme/img/testimonial-1.jpg" />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Roman Rey</h2>
                        <h2 className="text-lg font-semibold">Toranto, Canada</h2>
                        <p className='px-6 my-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur ac quam in congue. </p>
                        <div className="card-actions text-2xl text-[#3282AD]">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                    </div>
                </div>
                <div className="card max-w-[400px] bg-base-100 shadow-xl">
                    <div className="avatar w-24 mx-auto">
                        <div className="w-24 rounded-full">
                            <img src="https://www.golakshadweep.com/assets/new-theme/img/testimonial-2.jpg" />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Alex Tom</h2>
                        <h2 className="text-lg font-semibold">Toranto, Canada</h2>
                        <p className='px-6 my-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur ac quam in congue. </p>
                        <div className="card-actions text-2xl text-[#3282AD]">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                    </div>
                </div>
                <div className="card max-w-[400px] bg-base-100 shadow-xl">
                    <div className="avatar w-24 mx-auto">
                        <div className="w-24 rounded-full">
                            <img src="https://www.golakshadweep.com/assets/new-theme/img/testimonial-3.jpg" />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Finn Balor</h2>
                        <h2 className="text-lg font-semibold">Toranto, Canada</h2>
                        <p className='px-6 my-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur ac quam in congue. </p>
                        <div className="card-actions text-2xl text-[#3282AD]">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                    </div>
                </div>
                <div className="card max-w-[400px] bg-base-100 shadow-xl">
                    <div className="avatar w-24 mx-auto">
                        <div className="w-24 rounded-full">
                            <img src="https://www.golakshadweep.com/assets/new-theme/img/testimonial-4.jpg" />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Roman Rey</h2>
                        <h2 className="text-lg font-semibold">Toranto, Canada</h2>
                        <p className='px-6 my-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur ac quam in congue. </p>
                        <div className="card-actions text-2xl text-[#3282AD]">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                    </div>
                </div>
                <div className="card max-w-[400px] bg-base-100 shadow-xl">
                    <div className="avatar w-24 mx-auto">
                        <div className="w-24 rounded-full">
                            <img src="https://www.golakshadweep.com/assets/new-theme/img/testimonial-2.jpg" />
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Roman Rey</h2>
                        <h2 className="text-lg font-semibold">Toranto, Canada</h2>
                        <p className='px-6 my-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur ac quam in congue. </p>
                        <div className="card-actions text-2xl text-[#3282AD]">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Review;