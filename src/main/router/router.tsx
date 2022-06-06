import { ComponentType } from 'react'

import { Route, Routes } from 'react-router-dom'

import { Home, PageNotFound, Phrases, Words } from 'views'

export const Router: ComponentType = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/words" element={<Words />} />
      <Route path="/phrases" element={<Phrases />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
