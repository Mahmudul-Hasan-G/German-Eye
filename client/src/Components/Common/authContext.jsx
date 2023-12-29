import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [allPlaces, setAllPlaces] = useState([]);



    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, username, setUsername, allPlaces, setAllPlaces }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);

