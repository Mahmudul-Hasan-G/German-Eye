import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
//import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [allPlaces, setAllPlaces] = useState([]);
    const [selPlaces, setSelPlaces] = useState([]);

    // useEffect(() => {
    //     const getData = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:5000/places');
    //             console.log(response.data);
    //             setAllPlaces(response.data);

    //         } catch (error) {
    //             console.error(error.message);
    //         }
    //     };
    //     getData();
    // }, [])

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, username, setUsername, allPlaces, setAllPlaces, selPlaces, setSelPlaces }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);

