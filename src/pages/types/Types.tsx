import { Outlet } from 'react-router-dom'

import TypeGrid from '@/components/TypeGrid'

export default function TypesPage() {
  return (
    <div className="types-page">
      <TypeGrid />
      <Outlet />
    </div>
  )
}
