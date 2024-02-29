import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUser } from '../api/users';

function Profile() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await updateUser({ email, password, currentPassword });
            toast.success('Profile updated successfully');
            setTimeout(() => {
                navigate('/'); // Redirect to home page
            }, 2000); // Delay of 2 seconds
        } catch (error) {
            toast.error(`Error updating profile: ${error.message}`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <ToastContainer />
            <h1 className="text-2xl font-bold mb-4">Update Profile</h1>
            <form className="w-full max-w-xs" onSubmit={handleSubmit}>
                <input
                    className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="currentPassword"
                    type="password"
                    placeholder="Current Password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                />
                <input
                    className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="w-full px-4 py-2 mt-2 text-white bg-primary hover:bg-secondary rounded focus:outline-none focus:shadow-outline"
                >
                    Update Profile
                </button>
            </form>
        </div>
    );
}

export default Profile;