import React from 'react'
import { Navigate } from 'react-router-dom';

const Private = ({isLoggedIn,children}) => {
 
     if(isLoggedIn===true) return children;
     return <Navigate to="/login"/>;  

}

export default Private
