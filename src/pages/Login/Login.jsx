import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const { user, logIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        console.log("Email:", email, password);
        logIn(email, password)
            .then((result) => { 
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.error("Error logging in:", errorCode, errorMessage);
            });
    }
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center h-screen w-full">
                <div className=" p-8 rounded shadow-md w-full max-w-md bg-base-300">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="card bg-base-100 w-full">
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" name="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" name="password" className="input" placeholder="Password" />
                                    <div className="mt-2">
                                        <span className="mt-3">Don't have any account?</span>
                                        <Link to="/register" className="text-blue-500 hover:underline ml-1">
                                            Register
                                        </Link>
                                    </div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;