import './TypeInfo.scss'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { MAPPED_POKE_TYPES } from '../../utils'

import Card from '../../components/Card'
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

  return (
    <Card className="type-info" shadowColor={type.color}>
      <CardActions />
      <CardHeader type={type} />
      <CardBody type={type} />
    </Card>
  )
}
