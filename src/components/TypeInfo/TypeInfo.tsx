import { useParams } from 'react-router-dom'

import { MAPPED_POKE_TYPES } from '../../utils'

import Icon from '../Icon'

export default function TypeLink() {
  const { typeName = '' } = useParams()
  const type = MAPPED_POKE_TYPES.get(typeName)

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
