import React, { useEffect, useState } from 'react';
import SectionTitle from '../../shared/sectionTitle/SectionTitle';
import MenuItem from '../../../pages/ourMenu/MenuItem';
import UseMenu from '../../../hooks/UseMenu';

const PopularMenu = () => {
    const [menu]=UseMenu();
     const popularItems= menu.filter(item=> item.category==='popular');

//   const [menu, setMenu]=useState([]);

//   useEffect(()=>{
//     fetch('menu.json')
//     .then(res=>res.json())
//     .then(data => {
//         const popularItems= data.filter(item=> item.category==='popular');
//         setMenu(popularItems)
//     })
// },[])

    return (
        <div>
            
           <div><SectionTitle heading="FROM OUR MENU" subHeading="Check it out"></SectionTitle></div>
         
           
       
<div className="grid md:grid-cols-2 gap-10">
                {
                    
                    popularItems.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                  
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
        </div>
    );
};

export default PopularMenu;