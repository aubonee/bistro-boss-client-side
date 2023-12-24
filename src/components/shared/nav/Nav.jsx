import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import useCart from "../../../hooks/useCart";

const Nav = () => {

  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  console.log('cart',cart);
  const handleSignOut = () => {
    logOut()
      .then()
      .catch()
  }
  const navItems = <>
    <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Home</NavLink></li>
    <li><NavLink to="/menu" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Menu</NavLink></li>
    <li><NavLink to="/ourshop/salad" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Our Shop</NavLink></li>
    {/* <li><NavLink to="/login" className={({ isActive, isPending }) =>  isPending ? "pending" : isActive ? "active" : ""}> Login</NavLink></li> */}
    <li><Link to="/dashboard/cart" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>   <button className="btn btn-ghost ">
      <FaShoppingCart />
      <div className="badge badge-secondary">+{cart.length}</div>
    </button></Link></li>

  </>
  return (
    <div className="max-w-screen-xl">
      <div className=" max-w-screen-xl navbar fixed z-10 bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>

          {/* <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label> */}

          <div className="">
            {
              user ?
                <button onClick={handleSignOut} className="text-sm  my-2 mx-2 btn rounded-none bg-[#FF6969]  border-2 border-spacing-y-3 border-spacing-x-7 text-[#FFFFFA] border-[#FF6969]">Sign Out</button>
                :
                <Link className=" my-2 mx-2 btn rounded-none bg-[#FF6969] border-2 border-spacing-y-3 border-spacing-x-7 text-[#FFFFFA] border-[#FF6969]" to="/login">Login</Link>
            }
            {/* <a className="btn">Button</a> */}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Nav;