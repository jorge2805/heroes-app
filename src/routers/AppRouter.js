import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { DcScreen } from '../components/dc/DcScreen'
import { LoginScreen } from '../components/login/LoginScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<MarvelScreen />} />
            <Route path="/Dc" element={<DcScreen />} />
            <Route path="/Login" element={<LoginScreen />} />
            <Route path="/Marvel" element={<MarvelScreen />} />
            <Route path="/Search" element={<SearchScreen />} />
        </Routes>
    </BrowserRouter>
  )
}
