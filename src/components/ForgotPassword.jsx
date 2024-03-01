import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://deliverease-api.onrender.com/forgot-password', { email });
            toast.success(response.data.message);
            setTimeout(() => {
                navigate('/'); // Redirect to home page
            }, 2000); // Delay of 2 seconds
        } catch (error) {
            toast.error(`Error: ${error.response.data.message}`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <ToastContainer />
            <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
            <form className="w-full max-w-xs" onSubmit={handleSubmit}>
                <input
                    className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="w-full px-4 py-2 mt-2 text-white bg-primary hover:bg-secondary rounded focus:outline-none focus:shadow-outline"
                >
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default ForgotPasswordForm;