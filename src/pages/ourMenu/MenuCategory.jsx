import React from 'react';
import UseMenu from '../../hooks/UseMenu';
import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';


const MenuCategory = ({items,title}) => {
    console.log(title);
    
    return (
        

<div className=" my-1 flex flex-col justify-center items-center">
    <div className="mt-3 grid md:grid-cols-2 gap-10">
    {
                    
                    items.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
              
            }
    </div>
               
                <div>
                    <Link to ={`/ourshop/${title}`}> <button className="my-3 btn btn-outline border-0 border-b-4 mt-4">ORDER YOUR FAVOURITE FOOD</button></Link>
                </div>
            </div>
        
    );
};

export default MenuCategory;