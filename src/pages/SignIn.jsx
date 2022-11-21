import png from "../png.png";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const router = useNavigate()
    const clickSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            toast("Fill all the fields", {
                position: "bottom-left",
                type: "warning",
                closeOnClick: true,
                progress: null,
            });
            return;
        } else {
            await axios
                .post("https://vast-wildwood-07594.herokuapp.com/api/login/", {
                    username: username,
                    password: password,
                })
                .then(function (response) {
                    console.log(response);
                    toast("Login successful", {
                        position: "bottom-left",
                        type: "success",
                        closeOnClick: true,
                        progress: null,
                    });
                    router("/dashboard");
                })
                .catch(function (error) {
                    console.log(error);
                    toast("Something went wrong", {
                        position: "bottom-left",
                        type: "error",
                        closeOnClick: true,
                        progress: null,
                    });
                });
        }
    };
    return (
        <section className="bg-white">
            <div className="flex justify-around min-h-screen">
                <div
                    className="hidden bg-cover lg:block lg:w-2/5"
                    style={{ backgroundImage: `url(${png})` }}
                ></div>

                <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                    <div className="w-3/5 pl-12">
                        <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize">
                            Login to your Account
                        </h1>

                        <p className="mt-4 text-gray-500">
                            Welcome Back!
                        </p>

                        <form onSubmit={clickSubmit}>
                            <div className="my-4">
                                <label className="block mb-2 text-sm text-gray-600">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    placeholder="JohnSnow"
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    value={username}
                                    onChange={(e) =>
                                        setUserName(e.target.value)
                                    }
                                />
                            </div>

                            <div className="my-4" >
                                <label className="block mb-2 text-sm text-gray-600">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>

                            <button className="mt-4 mb-3 w-full bg-teal-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">
                                Login now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
