import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRouter } from './DashboardRouter'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/Login" element={<LoginScreen />} />
            
            <Route path="/*" element={<DashboardRouter />} />
        </Routes>
    </BrowserRouter>
  )
}
