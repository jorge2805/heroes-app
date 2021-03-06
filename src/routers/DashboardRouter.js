import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { Navbar } from '../components/ui/Navbar'
import { DcScreen } from '../components/dc/DcScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { DetailsHero } from '../components/hero/DetailsHero'

export const DashboardRouter = () => {
  return (
    <>
        <Navbar/>
        <div className='container'>
          <Routes>
              <Route path="Dc" element={<DcScreen />} />
              <Route path="Marvel" element={<MarvelScreen />} />
              <Route path="Search" element={<SearchScreen />} />
              <Route path="DetailsHero/:Id" element={<DetailsHero />} />

              <Route path="/" element={<MarvelScreen />} />
          </Routes>
        </div>
    </>
  )
}
