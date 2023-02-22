import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { IoIosSend } from 'react-icons/io';


const Booking = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className='w-full my-8'>
            <h4 className='text-3xl font-bold text-center'>Where are you flying?</h4>
            <form className="card flex-shrink-0 w-full bg-base-100 shadow-sm shadow-[#c3d2da]">
                <div className="card-body flex flex-col md:flex-row items-center justify-center flex-wrap gap-y-8">
                    <div className="form-control">
                        <fieldset class="border border-solid border-gray-300 p-1 w-full rounded-sm flex gap-1">
                            <legend class="text-sm">From-To</legend>
                            <input type="text" placeholder="From Where" className="input-sm" />
                            <input type="text" placeholder="To Where" className="input-sm " />
                        </fieldset>
                    </div>
                    <div className="form-control w-full md:w-auto">
                        <fieldset class="border border-solid border-gray-300 p-1 rounded-sm">
                            <legend class="text-sm">Trip</legend>
                            <select className="select-sm w-full">
                                <option disabled selected>Pick your Trip Type</option>
                                <option>Return</option>
                                <option>Single</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                        </fieldset>
                    </div>
                    <div className="form-control">
                        <fieldset class="border border-solid border-gray-300 p-1 rounded-sm flex gap-1">
                            <legend class="text-sm">Depart- Return</legend>
                            <DatePicker
                                className='input-sm w-full'
                                showIcon
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                            <DatePicker
                                className='input-sm w-full'
                                showIcon
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                        </fieldset>
                    </div>
                    <div className="form-control">
                        <fieldset class="border border-solid border-gray-300 p-1 rounded-sm flex gap-1">
                            <legend class="text-sm">Passenger - Class</legend>
                            <input type="text" placeholder="Passenger" className="input-sm " />
                            <input type="text" placeholder="Class" className="input-sm " />
                        </fieldset>
                    </div>
                    <div className="form-control">
                        <div class="p-1 rounded-sm flex gap-1">
                            <input type="text" placeholder="+ Add Promo Code" className="input-sm border-none" />
                        </div>
                    </div>
                    <div className="form-control">
                        <button className="btn bg-[#3282AD] border-none"><IoIosSend className='text-2xl mr-2' /> Show Flights</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Booking;