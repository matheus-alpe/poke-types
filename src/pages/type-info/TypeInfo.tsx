import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { MAPPED_POKE_TYPES } from '../../utils'

import Icon from '../../components/Icon'

export default function TypeInfoPage() {
  const navigate = useNavigate()
  const { typeName = '' } = useParams()
  const type = MAPPED_POKE_TYPES.get(typeName)

  useEffect(() => {
    if (type) return
    navigate('/404')
  }, [typeName])

  if (!type) return <></>

  return (
    <div>
      <h1>
        <Icon name={type.name} icon={type.icon} />
        {type.name}
      </h1>
    </div>
  )
}
