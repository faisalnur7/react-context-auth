import { Link, NavLink } from "react-router-dom";
import userDefaultPicture from "../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/">About</NavLink></li>
    <li><NavLink to="/">Career</NavLink></li>
</>;
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);


    const handeLogOut = () => {
        logOut()
            .then(() => {
                console.log("User logged out successfully");
            })
            .catch((error) => {
                console.error("Error logging out:", error);
            });
    };

    return (
        <div className="navbar bg-base-100 shadow-sm my-6 w-full sticky top-16 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src={userDefaultPicture} />
                    </div>
                </div>
                {
                    user ?
                        <button className="btn" onClick={handeLogOut}>Logout</button>
                        :
                        <Link to="/login" className="normal-case text-xl">
                            <button className="btn">Login</button>
                        </Link>
                }

            </div>
        </div>
    )
}

export default Navbar;