import { useEffect, useState } from 'react';
const useToken = (user, userName) => {
    // console.log(user, '555');
    const [token, setToken] = useState('')
    useEffect(() => {

        const getToken = async () => {

            const email = await user?.user?.email;
            const displayName = await userName || user?.displayName;
            // console.log(userName);
            const currentUser = { email: email, displayName: displayName, photoURL: user?.photoURL }
            if (email) {
                fetch(`https://floating-ocean-13139.herokuapp.com/users/${email}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        setToken(data.getToken);
                        localStorage.setItem('token', data.getToken);
                    })

            }

        }
        getToken()
    }, [user, userName])
    return [token]
};

export default useToken;