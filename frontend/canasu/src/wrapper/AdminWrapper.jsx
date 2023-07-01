import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import NavCompAdmin from '../components/NavCompAdmin';
const AdminWrapper = () => {
  return (
    
    <>
        <NavCompAdmin/>
        <Outlet/>
    </>
  )
}

export default AdminWrapper