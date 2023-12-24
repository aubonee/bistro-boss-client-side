
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../hooks/UseMenu';
import FoodCard from './FoodCard';
import { useParams } from 'react-router-dom';

const ShopTab = () => {
    const categories=['salad', 'soup','pizza', 'dessert','drinks'];
    const{ category } =useParams();
    const intialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(intialIndex);
    const [menu] =UseMenu();
   
    const salad= menu.filter(item=> item.category==='salad');
    const soup= menu.filter(item=> item.category==='soup');
    const dessert= menu.filter(item=> item.category==='dessert');
    const pizza= menu.filter(item=> item.category==='pizza');
    const drinks= menu.filter(item=> item.category==='drinks');
    return (
        <div className='my-5'>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <TabList>
      <Tab>Salad</Tab>
      <Tab>Soup</Tab>
      <Tab>Pizza</Tab>
      <Tab>Desserts</Tab>
      <Tab>Drinks</Tab>
    </TabList>

    <TabPanel>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
            salad.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
        }
     </div>

    </TabPanel>
    <TabPanel>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
            soup.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
        }
     </div>
    </TabPanel>
    <TabPanel>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
            pizza.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
        }
     </div>
    </TabPanel>
    <TabPanel>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
            dessert.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
        }
     </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
    {
            drinks.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
        }
    </div>
       
     
    </TabPanel>
   
  </Tabs>
        </div>
    );
};

export default ShopTab;