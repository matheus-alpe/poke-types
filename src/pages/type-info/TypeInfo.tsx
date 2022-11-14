import './TypeInfo.scss'
import { CSSProperties, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

import { MAPPED_POKE_TYPES } from '../../utils'

import Icon from '../../components/Icon'
import TypeLink from '../../components/TypeLink'

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
        <div className="actions">
          <Link to="/types" role="button">
            <Icon type="icon" name="close" title="Close" />
          </Link>
        </div>

        <div className="header">
          <Icon type="image" name={type.name} path={type.icon} />
          {type.name}
        </div>

        {/* TODO: implement card */}
        <div className="body">
          <p>Double damage to:</p>
          <ul>
            {(['dragon', 'dark'] as PokeTypeName[]).map((typeName) => {
              const type = MAPPED_POKE_TYPES.get(typeName)
              if (!type) return
              return <TypeLink type={type} key={type.name} />
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
