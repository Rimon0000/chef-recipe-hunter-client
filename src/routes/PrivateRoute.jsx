import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { Container } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)

    if(loading){
        return <Container>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>
    }

    if(user){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;