import { ComponentType } from 'react'

import { Routes, Route } from 'react-router-dom'

import { Home, Phrases, Words } from 'modules/views'

export const Router: ComponentType = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/words" element={<Words />} />
      <Route path="/phrases" element={<Phrases />} />
    </Routes>
  )
}
