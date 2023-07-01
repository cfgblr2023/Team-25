import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import NavComp from '../components/NavComp';
const AdminWrapper = () => {
  return (
    
    <>
        <NavComp/>
        <Outlet/>
    </>
  )
}

export default AdminWrapper