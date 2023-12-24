/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";




const FoodCard = ({ item }) => {

    const { name, image, price, recipe, category, _id } = item;

    const { user } = UseAuth();
    const navigate = useNavigate();
    // const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();
    const handleAddtoCart = food => {
        if (user && user.email) {
            console.log(food, user.email);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
                category
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to the cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })

        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please log in to add thi in cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, log in now"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login'); //   {state: {from: location}}
                }
            });

        }

    }
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <p>$ {price}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleAddtoCart(item)}
                        className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>

    );
};

export default FoodCard;