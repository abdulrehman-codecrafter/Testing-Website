import React from 'react'
import {Routes,Route} from "react-router-dom"
import Frontened from './frontened'
import Auth from './auth'
import Dashboard from './dashboard'
export default function Index() {
  return (
    <Routes >
        <Route path='/*' element={<Frontened />} />
        <Route path='auth/*' element={<Auth />} />
        <Route path='dashboard/*' element={<Dashboard />} />
    </Routes>
)
}
