import { useEffect } from 'react'
import { Outlet, useParams, useNavigate } from 'react-router-dom'
import { MAPPED_POKE_TYPES } from '../utils'

export default function TypesPage() {
  const navigate = useNavigate()
  const { typeName = '' } = useParams()
  const hasOnList = MAPPED_POKE_TYPES.get(typeName)

  useEffect(() => {
    if (hasOnList) return
    navigate('/404')
  }, [typeName])

  if (!hasOnList) return <></>

  return (
    <div className="types-modal">
      <h1>Type modal</h1>

      <Outlet />
    </div>
  )
}
