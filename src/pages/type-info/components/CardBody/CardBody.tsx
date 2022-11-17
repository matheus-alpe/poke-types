import { MAPPED_POKE_TYPES } from '@/utils'
import { useApi } from '@/http'

import TypeLink from '@/components/TypeLink'

interface Props {
  type: IPokeTypeStyle
}

export default function CardBody({ type }: Props) {
  const {
    error,
    loading,
    state: responseType,
  } = useApi<IPokeType>(`type/${type.name}`)

  if (error)
    return (
      <div className="body">
        <span>(Failed to load data)</span>
      </div>
    )

  return (
    <div className="body">
      {loading ? (
        <span>loading</span>
      ) : (
        <>
          <p>Double damage to:</p>
          <ul>
            {responseType?.damage_relations.double_damage_to.map(
              (reducedType) => {
                const type = MAPPED_POKE_TYPES.get(reducedType.name)
                if (!type) return
                return <TypeLink type={type} key={type.name} />
              }
            )}
          </ul>
        </>
      )}
    </div>
  )
}
