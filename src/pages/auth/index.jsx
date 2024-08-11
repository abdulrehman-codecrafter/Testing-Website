import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
export default function Auth() {
  return (

    <Routes >
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
    </Routes>
)
}
