import React from 'react';

const FindBooking = () => {
    return (
        <div>
            <div style={{
                background: `url(https://i.ibb.co/b3JTk5Q/Screenshot-2023-02-23-at-3-35-41-AM.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <h3 className='text-2xl font-bold text-center py-24'>My booking</h3>
            </div>

            <div style={{
                background: `url(https://i.ibb.co/WfBmC37/Screenshot-2023-02-23-at-3-48-05-AM.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }} className="hero min-h-screen">
                <div className="hero-content w-full flex-col lg:flex-row-reverse gap-4">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Booking ID</span>
                                </label>
                                <input type="text" placeholder="Booking ID" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Find</button>
                            </div>
                        </form>
                    </div>
                    <div className="text-center lg:text-left">
                        <img src="https://i.ibb.co/28j0wYg/Screenshot-2023-02-23-at-3-30-38-AM-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindBooking;