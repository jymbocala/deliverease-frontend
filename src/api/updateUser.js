// updateUser.js
const updateUser = async (userData) => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    try {
        const response = await fetch(`http://127.0.0.1:3000/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default updateUser;