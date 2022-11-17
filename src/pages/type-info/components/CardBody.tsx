import { MAPPED_POKE_TYPES } from '@/utils'

import TypeLink from '@/components/TypeLink'

interface Props {
  type: IPokeTypeStyle
}

export default function CardBody({ type }: Props) {
  return (
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
  )
}
