import { Routes, Route } from 'react-router-dom'

import TypesPage from '../pages/Types'
import NotFoundPage from '../pages/NotFound'

export default function Router() {
  return (
    <Routes>
      <Route path="types/bug" element={<TypesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
