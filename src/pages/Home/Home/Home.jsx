import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Testimonials from '../Testimonials/Testimonials';
import Blogs from '../Blogs/Blogs';
// import Ourservice from '../../OurService/Ourservice';
import Footer from '../../shared/Footer/Footer';
// import OurTeam from '../../OurTeam/OurTeam';
import Contact from '../../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import FAQ from '../FAQ/FAQ';
import Ourservice from '../OurService/Ourservice';
import OurTeam from '../OurTeam/OurTeam';


const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            {/* <Ourservice /> */}
            <Ourservice/>
            <OurTeam />
            <Portfolio />
            <FAQ />
            <Testimonials />
            <Blogs />
            <Contact />
            <Footer></Footer>
        </div>
    );
};

export default Home;