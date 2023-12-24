import React from 'react';
import useCart from '../../../../hooks/useCart';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart,refetch]=useCart();
    const totalPrice = cart.reduce((total, item)=> total+ item.price, 0)
   const axiosSecure =useAxiosSecure();
    const handleCartDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           
            axiosSecure.delete(`/carts/${id}`)
            .then(res=>{
                console.log(res.data);
                if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });

                }
            })
            }
          });
     
    }
    return (
        <div>
             <div className='flex justify-around items-center'>
             <h2 className='text-6xl'>Items: {cart.length}</h2>
           <h2 className='text-6xl'>Total Price: {totalPrice}</h2>
          <h2> {cart.length ? <Link to="/dashboard/payment">
                    <button className="btn btn-primary">Pay</button>
                </Link>:
                <button disabled className="btn btn-primary">Pay</button>
                }</h2>
          
        </div>
             <div className="overflow-x-auto">
  <table className="table  w-full mt-5">
    {/* head */}
    <thead>
      <tr>
        <th>
       #
        </th>
        <th>Item Tmage</th>
        <th>Item Name</th>
        <th>Price</th>
        <th> Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        cart.map((item,index)=>
            <tr key={item._id}>
            <th>
              {index+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask  w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
               
              </div>
            </td>
            <td>
              {item.name}
             
             
            </td>
            <td>{item.price}</td>
            <th>
              <button onClick={()=>handleCartDelete(item._id)} className="btn  p-2 py-3 bg-gray-200  text-xl text-red-500">Delete  <span className='mx-1'><FaTrash></FaTrash></span> </button>
            </th>
          </tr>
        )
     }
    
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
        </div>
       
    );
};

export default Cart;