import React from 'react';
import {Navigate,Outlet} from 'react-router-dom';
import Details from '../Details/Details';

const ProtectedRoutes = () => {
    const isAuthToken=window.sessionStorage.getItem('token')
    //  console.log("Value of AuthToken: ",isAuthToken);
    
      return isAuthToken ? <Outlet/> : <Navigate to ="/signin" />;
    };
    
    export default ProtectedRoutes;