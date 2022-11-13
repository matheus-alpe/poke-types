import { Routes, Route } from 'react-router-dom'

import TypesPage from '../pages/Types'
import NotFoundPage from '../pages/NotFound'

import TypeInfo from '../components/TypeInfo'

export default function Router() {
  return (
    <Routes>
      <Route path="types" element={<TypesPage />}>
        <Route path=":typeName" element={<TypeInfo />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
