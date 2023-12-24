import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const GoogleLogin = () => {
    
     // const[user,setUser] =useState(null);
     const {googleSignIn} =useContext(AuthContext);
     const axiosPublic =useAxiosPublic();
     const location = useLocation();
     const navigate = useNavigate();
     console.log(' login page', location);
     
    // const auth = getAuth(app);
    // const provider = new GoogleAuthProvider();
 
     const handleGoogleSignIn =()=>{
         console.log('google sign in')
       
         googleSignIn()
           .then((result) => {
                 
                 const loggedInUser = result.user;
                 console.log(loggedInUser);
                 const userInfo={
                    name : result.user?.displayName,
                    email : result.user?.email
                 }
                 axiosPublic.post('/users',userInfo)
                 .then(res=>{
                    console.log(res.data);
                    navigate(location?.state ? location.state : '/');
                 })

                //  console.log(result.user.displayName)
                //  console.log(loggedInUser.displayName)
                  // navigate after login
                 
                
               
               })
               .catch((error) => {
                 console.error(error);
             });
    
      }
    return (
        <div>
           <button className='btn bg-black text-white' onClick={handleGoogleSignIn }> <FaGoogle></FaGoogle> GooGle</button> 
        </div>
    );
};

export default GoogleLogin;