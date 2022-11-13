import { Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import TypesPage from '../pages/types'
import TypeInfoPage from '../pages/type-info'
import NotFoundPage from '../pages/not-found'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="types" element={<TypesPage />}>
        <Route path=":typeName" element={<TypeInfoPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
