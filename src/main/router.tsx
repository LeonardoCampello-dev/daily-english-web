import { ComponentType } from 'react'

import { Routes, Route } from 'react-router-dom'
import { Home } from '../components/views/home/home'
import { Words } from '../components/views/words/words'

export const Router: ComponentType = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/words" element={<Words />} />
    </Routes>
  )
}
