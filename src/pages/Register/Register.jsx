import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const { createUser }= useContext(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        // Handle registration logic here
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        createUser(email, password)
            .then((response) => {
                // Signed in 
                const user = response.user;
                console.log("User registered:", user);
                setUser(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error registering user:", errorCode, errorMessage);
            });
    }

    return (
        <div className="max-w-6xl mx-auto font-poppins">
            <Navbar />
            <div className="flex items-center justify-center h-screen w-full">
                <div className=" p-8 rounded w-full max-w-md bg-base-300">
                    <h2 className="text-2xl font-bold mb-6 text-center">Register your Account</h2>
                    <form onSubmit={handleRegister}>
                        <div className="card bg-base-100 w-full">
                            <div className="card-body">
                                <fieldset className="fieldset">

                                    <div className="mb-2 flex flex-col gap-3">
                                        <label className="label">Name</label>
                                        <input type="text" name="name" className="input" placeholder="Name" />
                                    </div>
                                    <div className="mb-2 flex flex-col gap-3">
                                        <label className="label">Photo URL</label>
                                        <input type="text" name="photo" className="input" placeholder="Photo URL" />
                                    </div>

                                    <div className="mb-2 flex flex-col gap-3">

                                        <label className="label">Email</label>
                                        <input type="email" name="email" className="input" placeholder="Email" />
                                    </div>
                                    <div className="mb-2 flex flex-col gap-3">

                                        <label className="label">Password</label>
                                        <input type="password" name="password" className="input" placeholder="Password" />
                                    </div>
                                    <div className="mt-0">
                                        <span>Already have an account?</span>
                                        <Link to="/login" className="text-blue-500 hover:underline ml-1">
                                            Login
                                        </Link>
                                    </div>
                                    <button className="btn btn-neutral mt-4">Register</button>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;