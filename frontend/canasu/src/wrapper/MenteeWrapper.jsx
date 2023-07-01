import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import NavComp from '../components/NavComp';
export default function MenteeWrapper() {
  return (
    
    <>
        <NavComp/>
        <Outlet/>
    </>
  )
}
