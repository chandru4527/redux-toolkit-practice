import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/auth/authSlice";

const Auth = () => {
    const dispatch = useDispatch();

    const { user, isAuthenticated } = useSelector(
        (state) => state.auth
    );

    const handleLogin = () => {
        const userData = {
            name: "Chandru Kumar",
            email: "ck@gmail.com",
            role: "Admin",
        };

        dispatch(login(userData));
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className=" flex items-center justify-center p-6">

            <div className="w-full max-w-xs bg-white rounded-sm shadow-xl p-6">

                {/* Profile */}
                <div className="flex flex-col items-center">

                    {/* Avatar */}
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">
                        {user?.name?.charAt(0) || "G"}
                    </div>

                    {/* Name */}
                    <h2 className="mt-4 text-xl font-semibold text-gray-800">
                        {user?.name || "Guest User"}
                    </h2>

                    {/* Email */}
                    <p className="text-sm text-gray-500 mt-1">
                        {user?.email || "Not logged in"}
                    </p>

                    {/* Role */}
                    <span
                        className={`mt-3 px-3 py-1 rounded-full text-xs font-medium ${isAuthenticated
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-100 text-gray-500"
                            }`}
                    >
                        {user?.role || "Guest"}
                    </span>

                </div>


                {/* Divider */}
                <div className="border-t border-gray-200 my-6"></div>


                {/* Status */}
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                        Status
                    </span>

                    <span
                        className={`font-medium ${isAuthenticated
                                ? "text-green-600"
                                : "text-gray-400"
                            }`}
                    >
                        {isAuthenticated
                            ? "Logged In"
                            : "Not Logged In"}
                    </span>
                </div>


                {/* Button */}
                {!isAuthenticated ? (
                    <button
                        onClick={handleLogin}
                        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition"
                    >
                        Login
                    </button>
                ) : (
                    <button
                        onClick={handleLogout}
                        className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-lg font-medium transition"
                    >
                        Logout
                    </button>
                )}

            </div>
        </div>
    );
};

export default Auth;