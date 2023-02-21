import React from 'react';
import Banner from '../../components/Home/Banner';
import Booking from '../../components/Home/Booking';
import ContactUs from '../../components/Home/ContactUs';
import Islands from '../../components/Home/Islands';
import Packages from '../../components/Home/Packages';
import Review from '../../components/Home/Review';

const Home = () => {
    return (
        <div>
            <Banner />
            <Booking />
            <Packages />
            <Islands />
            <ContactUs />
            <Review />
        </div>
    );
};

export default Home;