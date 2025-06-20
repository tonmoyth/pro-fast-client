import React from 'react';
import Banner from '../Banner/Banner';
import Works from '../Works/Works';
import Service from '../Service/Service';
import BrandMarquee from '../BrandMarquee/BrandMarquee';
import Benefit from '../Benefit/Benefit';
import Merchant from '../Merchant/Merchant';
import CustomersReview from '../CustomersReview/CustomersReview';
import Question from '../Question/Question';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Works></Works>
            <Service></Service>
            <BrandMarquee></BrandMarquee>
            <Benefit></Benefit>
            <Merchant></Merchant>
            <CustomersReview></CustomersReview>
            <Question></Question>
        </div>
    );
};

export default Home;