
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Logout() {

    const navigate = useNavigate();

    // HANDLE LOGOUT EVENT
    const logout = (e) => {
        e.preventDefault();
        console.log('Logout');

        // CLEAR DATA FROM STORAGE
        localStorage.clear();
        sessionStorage.clear();

        navigate("/login");
    }

    return (
        
            <Link 
              className="dropdown-item" 
              to="/login" 
              onClick={logout}
			>
             Logout
			</Link>
        
    )
}

export default Logout;