import { createContext, useState, useEffect } from "react";
import axios from 'axios'
export const UserContext = createContext({})

// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [searchURL, setSearchURL] = useState('')
    const [cart, setCart] = useState([])
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = window.localStorage.getItem('token');
                if (!token) {
                    return;
                }

                const response = await fetch('https://dummyjson.com/auth/me', {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                    },
                });

                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                setUser(null);
            }
        };

        fetchUserData();
    }, []);

    const fetchData = async () => {
        const res = await axios.get(searchURL ? `https://dummyjson.com/products/search?q=${searchURL}` : 'https://dummyjson.com/products')
        setData(res.data.products)
    }

    useEffect(() => {
        fetchData()

    }, [searchURL])

    return (
        <UserContext.Provider value={{ data, setData, user, setUser, searchURL, setSearchURL, cart, setCart }}>
            {children}
        </UserContext.Provider>
    )
}