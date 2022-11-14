import { CSSProperties, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { MAPPED_POKE_TYPES } from '../../utils'

import Icon from '../../components/Icon'
import Type from '../../components/TypeLink'

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
        <div className="header">
          <Icon type="image" name={type.name} path={type.icon} />
          {type.name}
        </div>

        {/* TODO: implement card */}
        <div className="body">
          <Icon type="icon" name="close" title="Close" />
        </div>
      </div>
    </div>
  )
}
