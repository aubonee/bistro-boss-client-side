
import UseAuth from './UseAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
   

const {user}=UseAuth()
const axiosSecure =useAxiosSecure();
const { refetch, data: cart = [] } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async () => {
        const res = await axiosSecure(`/carts?email=${user?.email}`)
        console.log('res from axios', res)
        return res.data;
    },
})
return [cart, refetch]
};


export default useCart;