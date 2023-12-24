import React from 'react';
import UseMenu from '../../hooks/UseMenu';

import PageTitle from '../../components/shared/pageTitle/PageTitle';
import bgImg from '../../../src/assets/menu/banner3.jpg'
import SectionTitle from '../../components/shared/sectionTitle/SectionTitle';
import MenuCategory from './MenuCategory';

const Menu = () => {
    const [menu] =UseMenu()
   // const popularItems= data.filter(item=> item.category==='popular');
    const salad= menu.filter(item=> item.category==='salad');
    const soup= menu.filter(item=> item.category==='soup');
    const dessert= menu.filter(item=> item.category==='dessert');
    const pizza= menu.filter(item=> item.category==='pizza');
    const offered= menu.filter(item=> item.category==='offered');
    return (
        <div>
             <PageTitle img={bgImg}  title="Our Menu" subtitle="our menu subtitle"></PageTitle>
             <SectionTitle heading="FROM OUR MENU" subHeading="Check it out"></SectionTitle>
            <MenuCategory items={offered} title="salad"></MenuCategory>
            <PageTitle img={bgImg}  title="dessert" subtitle="our Dessert subtitle"></PageTitle>
            <MenuCategory items={dessert} title="dessert"></MenuCategory>
            <PageTitle img={bgImg}  title="soup" subtitle="our soup subtitle"></PageTitle>
            <MenuCategory items={soup} title="soup"></MenuCategory>
            <PageTitle img={bgImg}  title="pizza" subtitle="our pizza subtitle"></PageTitle>
            <MenuCategory items={pizza} title="pizza"></MenuCategory>
            <PageTitle img={bgImg}  title="Salad" subtitle="our salad subtitle"></PageTitle>
            <MenuCategory items={salad} title="Salad"></MenuCategory>
        </div>
    );
};

export default Menu;