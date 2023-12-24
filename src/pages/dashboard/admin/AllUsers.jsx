import { useQuery } from '@tanstack/react-query';

import { FaTrash, FaUsers } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure =useAxiosSecure();
    const { data:users=[] ,refetch}=useQuery({
        queryKey:['users'],
        queryFn:async ()=>{
            const res =await axiosSecure.get('/users');
            return res.data

        }
    })
    const handleDeleteUser= user =>{

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
           
            axiosSecure.delete(`/users/${user._id}`)
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
    const handleMakeAdmin= user =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You want to make this user Admin!",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it"
          }).then((result) => {
            if (result.isConfirmed) {
           
            axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res=>{
                console.log(res.data);
                if(res.data.modifiedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Done!",
                        text: "this user is admin now.",
                        icon: "success"
                      });

                }
            })
            }
          });

    }
    return (
        <div>
            <div className='flex justify-evenly my-4 text-center'>
            <h2 className='text-3xl'>All Users</h2>
                <h2 className='text-3xl'>Total Users : {users.length}</h2>
            </div>

            <div className="overflow-x-auto">
  <table className="table  w-full mt-5">
    {/* head */}
    <thead>
      <tr>
        <th>
       #
        </th>
        <th>User Name</th>
        <th>User Email</th>
        <th>Role</th>
        <th> Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        users.map((user,index)=>
        <tr key={user._id}>
            <th> {index+1} </th>
            <td> {user.name}</td>
            <td>{user.email}</td>
  
              <td>
              {user.role == 'admin'? 'Admin': <button onClick={()=>handleMakeAdmin(user)}  className="btn  p-3 py-1 my-2 text-white text-lg bg-yellow-700"><FaUsers></FaUsers> </button>}
               
              </td>
  
            <th><button onClick={()=>handleDeleteUser(user)}  className="btn  p-2 py-3 my-2 bg-gray-200  text-lg text-red-500">Delete  <span className='mx-1 text-md sm:hidden md:hidden lg:flex'><FaTrash></FaTrash></span> </button></th>
        </tr>
        )
     } 
    </tbody>
    {/* foot */}
   
    
  </table>
</div>
        </div>
    );
};

export default AllUsers;