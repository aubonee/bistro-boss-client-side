import React from 'react';
import PageTitle from '../../components/shared/pageTitle/PageTitle';
import shopBG from '../../../src/assets/shop/banner2.jpg'
import ShopTab from './ShopTab';

const OurShop = () => {
    return (
        <div>
           <PageTitle title="Our Shop" subtitle="Subtitle of our shop" img={shopBG}></PageTitle>
           <ShopTab></ShopTab>
        </div>
    );
};

export default OurShop;