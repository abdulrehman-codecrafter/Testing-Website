import React from 'react'
import {Routes,Route } from "react-router-dom"
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Shop from './Shop'

export default function Frontened() {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='shop' element={<Shop />} />
    </Routes>
)
}
