import React, { useEffect, useState } from 'react'
import { serviceGet } from '../utils/api'
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const [success, setsuccess] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const func = async()=>{
          if(localStorage.getItem('token') && localStorage.getItem('type')){
            try {
                const {user, success} = await serviceGet(`/auth/${localStorage.getItem('type')}/verify`,{
                    auth:  `bearer ${localStorage.getItem('token')}`
                })
                
            } catch (error) {
                navigate('/login');
            }
          }
        }
        func();
      }, [])
 if(success) return props.children;
 return <Navigate to="/login"/>
}

export default ProtectedRoute