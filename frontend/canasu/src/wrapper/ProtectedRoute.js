import React, { useEffect, useState } from 'react'
import { serviceGet } from '../utils/api'
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const [success, setsuccess] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const func = async()=>{
          if(localStorage.getItem('type') ){
            try {
                const {user, success} = await serviceGet(`/auth/${props.type}/verify`,{
                    auth:  `bearer ${localStorage.getItem('token')}`
                })
                
                if(success) return props.children;
            } catch (error) {
                navigate('/login');
            }
          }
          else{
            navigate('/login'); 
          }
        }
        func();
      }, [])
}

export default ProtectedRoute