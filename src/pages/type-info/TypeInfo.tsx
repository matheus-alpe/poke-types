import './TypeInfo.scss'
import { CSSProperties, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { MAPPED_POKE_TYPES } from '../../utils'

import TypeLink from '../../components/TypeLink'
import { CardActions, CardBody, CardHeader } from './components'

export default function TypeInfoPage() {
  const navigate = useNavigate()
  const { typeName = 'bug' } = useParams<{ typeName: PokeTypeName }>()
  const type = MAPPED_POKE_TYPES.get(typeName)

  useEffect(() => {
    if (type) return
    navigate('/404')
  }, [typeName])

  if (!type) return <></>

  const styleColor = { '--shadow-bg': type.color } as CSSProperties

  return (
    <div className="type-info" style={styleColor}>
      <div className="card">
        <CardActions />
        <CardHeader type={type} />
        <CardBody type={type} />
      </div>
    </div>
  )
}
